// Zarpin design system — HTML builders. Every builder returns a DOM node that
// uses the classes in components.css. Prop names follow the final DS naming:
//   variant  fill | tonal | border | naked | link        (Figma: Style)
//   color    neutral | danger                            (Figma: Color Black | Red)
//   size     xs | sm | md | lg | xl                       (Figma: Size «XL - 56px» …)
const files = import.meta.glob('./icons/*.svg', { eager: true, query: '?url', import: 'default' });
export const icons = Object.fromEntries(Object.entries(files).map(([path, url]) => [path.slice(8, -4), url]));
export const iconNames = Object.keys(icons).sort();
export const variants = ['fill', 'tonal', 'border', 'naked', 'link'];
export const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
export const tagColors = ['neutral', 'gold', 'green', 'red', 'blue'];
export const tones = ['info', 'success', 'warning', 'error'];

let uid = 0;
export const id = name => 'zp-' + name + '-' + ++uid;

export function normalizeDigits(value) {
  return String(value).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
}
export const fa = value => String(value).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

export function el(tag, className = '', children = []) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  for (const child of [].concat(children)) if (child !== null && child !== undefined && child !== false) node.append(child);
  return node;
}

export function icon(name, size) {
  const glyph = el('span', 'zp-icon');
  glyph.setAttribute('aria-hidden', 'true');
  if (icons[name]) glyph.style.setProperty('--icon-image', 'url("' + icons[name] + '")');
  if (size) glyph.style.setProperty('--icon-size', size + 'px');
  return glyph;
}

export function button({ label = 'ادامه', variant = 'fill', color = 'neutral', size = 'xl', rounded = false, block = false,
  disabled = false, loading = false, leadingIcon = '', trailingIcon = '', iconOnly = false, type = 'button' } = {}) {
  const node = el('button', 'zp-button');
  node.type = type;
  Object.assign(node.dataset, { variant, color, size });
  if (block) node.dataset.block = '';
  node.classList.toggle('is-rounded', rounded);
  node.classList.toggle('is-icon-only', iconOnly);
  node.disabled = disabled || loading;
  if (loading) { node.setAttribute('aria-busy', 'true'); node.append(el('span', 'zp-spinner')); }
  else if (leadingIcon) node.append(icon(leadingIcon));
  if (iconOnly) node.setAttribute('aria-label', label);
  else if (!loading) node.append(label);
  if (!iconOnly && !loading && trailingIcon) node.append(icon(trailingIcon));
  return node;
}

export const iconButton = ({ icon: name = 'arrow-right', label = '', variant = 'tonal', size = 'md', rounded = true, ...rest } = {}) =>
  button({ ...rest, label, variant, size, rounded, iconOnly: true, leadingIcon: name });

export function textField({ label = 'عنوان', placeholder = '', value = '', help = '', error = '', disabled = false,
  focused = false, dir = 'rtl', inputMode = 'text', leadingIcon = '', suffix = '', action = null } = {}) {
  const field = el('div', 'zp-field');
  const input = el('input', 'zp-field-input');
  input.id = id('field');
  Object.assign(input, { placeholder, value, disabled, inputMode });
  input.dir = dir;
  const caption = el('label', 'zp-field-label', label);
  caption.htmlFor = input.id;
  const box = el('div', 'zp-field-box', [leadingIcon && icon(leadingIcon), input, suffix && el('span', 'zp-field-suffix', suffix)]);
  field.append(caption, action ? el('div', 'zp-field-row', [box, action]) : box);
  field.classList.toggle('is-error', !!error);
  field.classList.toggle('is-disabled', disabled);
  field.classList.toggle('is-focused', focused);
  if (error || help) {
    const note = el('p', 'zp-field-help', error || help);
    note.id = input.id + '-help';
    input.setAttribute('aria-describedby', note.id);
    field.append(note);
  }
  if (error) input.setAttribute('aria-invalid', 'true');
  return field;
}

export function otp({ length = 6, value = '', state = 'default', focused = true } = {}) {
  const wrap = el('div', 'zp-otp');
  wrap.style.setProperty('--length', length);
  wrap.dataset.state = state;
  const input = el('input');
  Object.assign(input, { inputMode: 'numeric', autocomplete: 'one-time-code', maxLength: length });
  input.setAttribute('aria-label', 'کد تأیید ' + fa(length) + ' رقمی');
  const cells = Array.from({ length }, () => el('span', 'zp-otp-cell'));
  const render = () => {
    const code = normalizeDigits(input.value).replace(/\D/g, '').slice(0, length);
    input.value = code;
    cells.forEach((cell, i) => {
      cell.textContent = code[i] ? fa(code[i]) : '';
      cell.classList.toggle('is-active', focused && i === Math.min(code.length, length - 1) && state === 'default');
    });
  };
  input.value = value;
  input.addEventListener('input', render);
  render();
  wrap.append(...cells, input);
  return wrap;
}

function control(kind, { checked = false, disabled = false, name, error = false, label = '' } = {}) {
  const box = el('span', kind === 'checkbox' ? 'zp-checkbox' : kind === 'radio' ? 'zp-radio' : 'zp-switch');
  const input = el('input');
  input.type = kind === 'switch' ? 'checkbox' : kind;
  if (kind === 'switch') input.setAttribute('role', 'switch');
  Object.assign(input, { checked, disabled });
  if (name) input.name = name;
  if (label) input.setAttribute('aria-label', label);
  box.append(input);
  if (kind === 'checkbox') box.append(icon('check'));
  box.classList.toggle('is-error', error);
  return box;
}
export const checkbox = props => control('checkbox', props);
export const radio = props => control('radio', props);
export const switchControl = props => control('switch', props);

// Option row: a checkbox, radio or switch with title, description and an optional
// meta text (e.g. «همیشه فعال»). locked = always on and not editable.
export function option({ control: kind = 'checkbox', title = '', description = '', meta = '', media = null,
  checked = false, disabled = false, locked = false, error = false, name, plain = false, link = '' } = {}) {
  const row = el('label', 'zp-option');
  row.dataset.control = kind;
  const input = control(kind, { checked: locked || checked, disabled: disabled || locked, name, error });
  const heading = el('span', 'zp-option-title' + (plain ? ' is-plain' : ''));
  if (link) {
    const anchor = el('span', 'zp-option-link', link);
    heading.append(anchor, ' ' + title);
  } else heading.append(title);
  const text = el('span', 'zp-option-text', [heading, description && el('span', 'zp-option-desc', description)]);
  const parts = kind === 'switch' ? [text, input] : [input, media && el('span', 'zp-option-media', media), text, meta && el('span', 'zp-option-meta', meta)];
  row.append(...parts.filter(Boolean));
  row.classList.toggle('is-error', error);
  row.classList.toggle('is-locked', locked);
  return row;
}

export function tag({ label = 'جدید', color = 'neutral', variant = 'tonal', size = 'md', leadingIcon = '', trailingIcon = '', removable = false } = {}) {
  const node = el('span', 'zp-tag');
  Object.assign(node.dataset, { color, variant, size });
  if (leadingIcon) node.append(icon(leadingIcon));
  node.append(el('span', '', label));
  if (trailingIcon) node.append(icon(trailingIcon));
  if (removable) {
    const remove = el('button', '', icon('close', 10));
    remove.type = 'button';
    remove.setAttribute('aria-label', 'حذف ' + label);
    node.append(remove);
  }
  return node;
}

export function divider({ level = 1, direction = 'horizontal' } = {}) {
  const node = el('hr', 'zp-divider');
  Object.assign(node.dataset, { level, direction });
  return node;
}

// Header: title on the right with one button before it (back by default);
// the left side («end») takes anything: icon buttons, a text action or nothing.
export function header({ title = 'عنوان', subtitle = '', start = 'back', end = [], divider: line = true } = {}) {
  const node = el('header', 'zp-header');
  node.classList.toggle('has-divider', line);
  const startButton = start === 'back' ? iconButton({ icon: 'arrow-right', label: 'بازگشت' })
    : start === 'close' ? iconButton({ icon: 'close', label: 'بستن' }) : null;
  const titles = el('div', 'zp-header-titles', [el('h1', 'zp-header-title', title), subtitle && el('span', 'zp-header-subtitle', subtitle)]);
  node.append(el('div', 'zp-header-start', [startButton, titles]), el('div', 'zp-header-end', [].concat(end)));
  return node;
}

export function bottomNav({ items = [['tab-home', 'صفحه اصلی'], ['tab-trade', 'خرید و فروش'], ['tab-wallet', 'کیف پول']], current = 0 } = {}) {
  const nav = el('nav', 'zp-bottom-nav');
  nav.setAttribute('aria-label', 'منوی اصلی');
  const bar = el('div', 'zp-bottom-nav-bar');
  bar.style.setProperty('--count', items.length);
  const buttons = items.map(([glyph, label], i) => {
    const item = el('button', 'zp-bottom-nav-item');
    item.type = 'button';
    const linear = icon(glyph); linear.classList.add('is-linear');
    const bold = icon(glyph + '-bold'); bold.classList.add('is-bold');
    item.append(linear, bold, el('span', '', label));
    item.onclick = () => buttons.forEach((b, j) => b.toggleAttribute('aria-current', j === i) || b.setAttribute('aria-current', j === i ? 'page' : 'false'));
    if (i === current) item.setAttribute('aria-current', 'page');
    return item;
  });
  bar.append(...buttons);
  nav.append(bar);
  return nav;
}

// Bottom sheet. close: show the × button. actions: buttons in the footer.
export function sheet({ title = '', body = '', actions = [], close = true, handle = true, dialog = false } = {}) {
  const node = el('section', 'zp-sheet' + (dialog ? ' is-dialog' : ''));
  node.setAttribute('role', 'dialog');
  node.setAttribute('aria-modal', 'true');
  if (handle) node.append(el('span', 'zp-sheet-handle'));
  const heading = el('h2', 'zp-sheet-title', dialog ? '' : title);
  heading.id = id('sheet');
  node.setAttribute('aria-labelledby', heading.id);
  if (!dialog || close) node.append(el('div', 'zp-sheet-head', [heading, close && iconButton({ icon: 'close', label: 'بستن', variant: 'tonal', size: 'sm' })]));
  const content = el('div', 'zp-sheet-body', [].concat(body).map(part => typeof part === 'string' ? el('p', '', part) : part));
  if (dialog) content.insertBefore(el('h2', '', title), content.querySelector(':scope > p'));
  node.append(content);
  if (actions.length) node.append(el('div', 'zp-sheet-foot', actions));
  return node;
}

export function dialog({ title = '', text = '', image = '', primary = 'تأیید', secondary = 'انصراف', danger = false } = {}) {
  const art = image ? Object.assign(el('img'), { src: image, alt: '' }) : null;
  return sheet({
    title, dialog: true, close: true,
    body: [art, el('p', '', text)].filter(Boolean),
    actions: [button({ label: secondary, variant: 'border', color: danger ? 'danger' : 'neutral', size: 'lg' }), button({ label: primary, size: 'lg' })],
  });
}

export function toast({ message = 'کپی شد', tone = 'success' } = {}) {
  const node = el('div', 'zp-toast', [icon(tone === 'error' ? 'close-circle-bold' : tone === 'info' ? 'info-circle-bold' : 'tick-circle-bold'), el('span', '', message)]);
  node.dataset.tone = tone;
  node.setAttribute('role', 'status');
  return node;
}

const toneIcon = { info: 'info-circle', success: 'tick-circle', warning: 'warning', error: 'danger' };
// Banner: inline message inside a page. strong = bold lead-in; link = trailing link text.
export function banner({ text = '', strong = '', link = '', tone = 'info', showIcon = true, shadow = false } = {}) {
  const body = el('p', 'zp-banner-text');
  if (strong) body.append(el('b', '', strong), ' ');
  body.append(text);
  if (link) { const a = el('a', '', link); a.href = '#'; body.append(' ', a); }
  const node = el('div', 'zp-banner', [body, showIcon && icon(toneIcon[tone])]);
  node.dataset.tone = tone;
  node.classList.toggle('has-shadow', shadow);
  node.setAttribute('role', tone === 'error' || tone === 'warning' ? 'alert' : 'note');
  return node;
}

export function snackbar({ title = 'اطلاعیه', text = '', tone = 'warning', action = true } = {}) {
  const head = el('div', 'zp-snackbar-head', [icon(toneIcon[tone], 20), el('span', '', title), action && icon('chevron-left', 16)]);
  const node = el('div', 'zp-snackbar', [head, el('p', '', text)]);
  node.dataset.tone = tone;
  return node;
}

export function tooltip({ text = '', placement = 'top' } = {}) {
  const node = el('div', 'zp-tooltip', text);
  node.dataset.placement = placement;
  node.setAttribute('role', 'tooltip');
  return node;
}

export function steps({ count = 2, current = 1 } = {}) {
  const node = el('div', 'zp-steps');
  node.style.setProperty('--count', count);
  node.setAttribute('role', 'progressbar');
  node.setAttribute('aria-valuemin', 1); node.setAttribute('aria-valuemax', count); node.setAttribute('aria-valuenow', current);
  node.setAttribute('aria-label', 'مرحلهٔ ' + fa(current) + ' از ' + fa(count));
  for (let i = 1; i <= count; i++) node.append(el('i', i <= current ? 'is-done' : ''));
  return node;
}

export function copyField({ label = 'API Key', value = '', secret = false, compact = false } = {}) {
  const copy = button({ label: 'کپی', variant: 'naked', size: 'xs', leadingIcon: 'copy' });
  const code = el('code', '', value);
  const node = el('div', 'zp-copy' + (secret ? ' is-secret' : '') + (compact ? ' is-compact' : ''), [el('div', 'zp-copy-head', [el('span', '', label), copy]), code]);
  copy.onclick = () => navigator.clipboard?.writeText(value).catch(() => {});
  return node;
}

export function listItem({ title = '', subtitle = '', media = '', current = false, chevron = true } = {}) {
  const node = el('button', 'zp-list-item', [
    media && el('span', 'zp-list-item-media', icon(media)),
    el('span', 'zp-list-item-text', [el('span', 'zp-list-item-title', title), subtitle && el('span', 'zp-list-item-subtitle', subtitle)]),
    chevron && icon('chevron-left'),
  ]);
  node.type = 'button';
  if (current) node.setAttribute('aria-current', 'page');
  return node;
}

export function accordion({ question = '', answer = '', open = false } = {}) {
  const node = el('details', 'zp-accordion', [el('summary', '', [question, icon('chevron-down')]), el('p', '', answer)]);
  node.open = open;
  return node;
}

export function dateWheel({ day = '۱۵', month = 'مهر', year = '۱۳۷۴' } = {}) {
  const months = ['مرداد', 'شهریور', 'مهر', 'آبان', 'آذر'];
  const around = (list, value) => list.map(v => { const s = el('span', v === value ? 'is-selected' : '', v); return s; });
  const col = (head, list, value) => el('div', 'zp-wheel-col', [el('b', '', head), ...around(list, value)]);
  return el('div', 'zp-wheel', [
    col('روز', ['۱۳', '۱۴', '۱۵', '۱۶', '۱۷'], day),
    col('ماه', months, month),
    col('سال', ['۱۳۷۲', '۱۳۷۳', '۱۳۷۴', '۱۳۷۵', '۱۳۷۶'], year),
  ]);
}

export const row = (items, gap = 12) => { const n = el('div', 'zp-row', items); n.style.gap = gap + 'px'; return n; };
export const stack = (items, gap = 12) => { const n = el('div', 'zp-stack', items); n.style.gap = gap + 'px'; return n; };

import addIcon from './icons/add.svg?url';
import arrowIcon from './icons/arrow-right.svg?url';
import searchIcon from './icons/search.svg?url';

export const actionVariants = ['fill', 'border', 'tonal', 'naked', 'link'];
export const actionSizes = ['xs', 'sm', 'md', 'lg', 'xl'];
export const iconNames = ['add', 'arrow-right', 'search'];
export const tagTones = ['neutral', 'gold', 'green', 'red', 'blue'];

const icons = { add: addIcon, 'arrow-right': arrowIcon, search: searchIcon };
let nextInputId = 0;

function element(tag, className, text) {
  const node = document.createElement(tag);
  node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function icon(name) {
  const glyph = element('span', 'zp-icon');
  glyph.setAttribute('aria-hidden', 'true');
  glyph.style.setProperty('--icon-image', 'url("' + icons[name] + '")');
  return glyph;
}

export function button({
  label = 'ادامه',
  variant = 'fill',
  tone = 'neutral',
  size = 'xl',
  rounded = false,
  disabled = false,
  loading = false,
  leadingIcon,
  trailingIcon,
  iconOnly = false,
  type = 'button',
} = {}) {
  const control = element('button', 'zp-button');
  control.type = type;
  control.disabled = disabled || loading;
  control.dataset.variant = variant;
  control.dataset.tone = tone;
  control.dataset.size = size;
  control.classList.toggle('is-rounded', rounded);
  control.classList.toggle('is-icon-only', iconOnly);
  if (iconOnly) control.setAttribute('aria-label', label);
  if (loading) {
    control.setAttribute('aria-busy', 'true');
    const spinner = element('span', 'zp-spinner');
    spinner.setAttribute('aria-hidden', 'true');
    control.append(spinner);
  } else if (leadingIcon && icons[leadingIcon]) {
    control.append(icon(leadingIcon));
  }
  if (!iconOnly) control.append(document.createTextNode(label));
  if (!iconOnly && !loading && trailingIcon && icons[trailingIcon]) control.append(icon(trailingIcon));
  return control;
}

export function input({
  label = 'مبلغ',
  placeholder = '',
  value = '',
  hint = '',
  error = '',
  disabled = false,
  direction = 'rtl',
  inputMode = 'text',
} = {}) {
  const field = element('div', 'zp-field');
  const control = element('input', 'zp-input');
  const id = 'zp-input-' + ++nextInputId;
  control.id = id;
  control.placeholder = placeholder;
  control.value = value;
  control.disabled = disabled;
  control.dir = direction;
  control.inputMode = inputMode;

  const caption = element('label', 'zp-field-label', label);
  caption.htmlFor = id;
  field.append(caption, control);
  if (error) control.setAttribute('aria-invalid', 'true');
  if (error || hint) {
    const detail = element('p', error ? 'zp-field-detail is-error' : 'zp-field-detail', error || hint);
    detail.id = id + '-detail';
    control.setAttribute('aria-describedby', detail.id);
    field.append(detail);
  }
  return field;
}

export function tag({ label = 'جدید', tone = 'gold', variant = 'tonal', size = 'md', leadingIcon, trailingIcon } = {}) {
  const badge = element('span', 'zp-tag');
  badge.dataset.tone = tone;
  badge.dataset.variant = variant;
  badge.dataset.size = size;
  if (leadingIcon && icons[leadingIcon]) badge.append(icon(leadingIcon));
  badge.append(document.createTextNode(label));
  if (trailingIcon && icons[trailingIcon]) badge.append(icon(trailingIcon));
  return badge;
}

export function row(items) {
  const group = element('div', 'zp-row');
  group.append(...items);
  return group;
}

import tokens from '../generated/tokens.json';
import diff from '../generated/figma-diff.json';
import { el, icon, iconNames } from '../ds/components.js';
import { docs, figma, figmaUrl } from '../ds/figma.js';
import iconInfo from '../ds/icons.json';

export default { title: 'Foundations', parameters: { controls: { disable: true } } };

const swatches = list => el('ul', 'sb-grid', Object.entries(list).map(([name, value]) => el('li', 'sb-cell', [
  Object.assign(el('span', 'sb-swatch'), { style: 'background:var(--' + name + ')' }), el('code', '', '--' + name), el('code', '', value),
])));

const families = ['gold', 'amber', 'green', 'red', 'blue', 'neutral', 'accent', 'alpha-white', 'alpha-black', 'base', 'mist'];
export const Color = {
  parameters: { controls: { disable: false }, ...docs('Colors', 'رنگ‌های پایه (Primitives) و معنایی (Semantic). در کد همیشه از رنگ معنایی استفاده کنید؛ تم تیره خودکار عوض می‌شود.') },
  args: { set: 'semantic', family: 'gold' },
  argTypes: { set: { control: 'inline-radio', options: ['semantic', 'primitives'] }, family: { control: 'select', options: families, if: { arg: 'set', eq: 'primitives' } } },
  render: ({ set, family }, { globals }) => set === 'semantic'
    ? swatches(globals.theme === 'dark' ? tokens.dark : tokens.light)
    : swatches(Object.fromEntries(Object.entries(tokens.primitives).filter(([k]) => k.startsWith(family + '-')))),
};

const styles = ['h-1', 'h-2', 'h-3', 'display-large', 'display-medium', 'display-small', 'heading-large', 'heading-medium', 'heading-small', 'title-large', 'title-medium', 'title-small', 'body-large', 'body-medium', 'body-small', 'label-large', 'label-medium', 'label-small', 'caption-large', 'caption-small'];
export const Typography = {
  parameters: { controls: { disable: false }, ...docs('Typography', 'فونت یکان‌بخ. کلاس‌ها: `.t-<سبک>` و `-semibold` / `-bold`، مثلاً `.t-label-large-bold`.') },
  args: { sample: 'خرید و فروش طلا', weight: 'bold' },
  argTypes: { weight: { control: 'inline-radio', options: ['regular', 'semibold', 'bold'] } },
  render: ({ sample, weight }) => el('div', '', styles.map(style => el('div', 'sb-type', [
    el('span', 't-' + style + (weight === 'regular' ? '' : '-' + weight), sample),
    el('code', 'sb-label', style + ' · ' + tokens.typography['font-size-' + style] + ' / ' + tokens.typography['line-height-' + style]),
  ]))),
};

export const Icons = {
  parameters: docs('Icons', 'آیکون‌هایی که اپ استفاده می‌کند، با همان نام فیگما. کتابخانهٔ کامل (بیش از ۹۰۰۰ آیکون Linear و Bold) در فیگماست؛ هر آیکون تازه‌ای که لازم شد به `src/ds/icons/` اضافه می‌شود.'),
  render: () => el('ul', 'sb-grid', iconNames.map(name => el('li', 'sb-cell', [icon(name, 24), el('code', '', name), el('span', 'sb-label', iconInfo[name] ?? '')]))),
};

export const FigmaSync = {
  name: 'Figma sync',
  parameters: { docs: { description: { component: 'مقایسهٔ توکن‌های کد با متغیرهای فیگما. اگر خالی است یعنی همه یکی‌اند. به‌روزرسانی: README ← «توکن‌ها».' } } },
  render: () => diff.length
    ? el('table', 'sb-table', [el('thead', '', el('tr', '', ['گروه', 'توکن', 'فیگما', 'کد'].map(t => el('th', '', t)))), el('tbody', '', diff.map(r => el('tr', '', [r.group, r.token, r.figma, r.code].map(v => el('td', '', el('code', '', v))))))])
    : el('p', 't-body-medium', '✓ همهٔ ' + (Object.keys(tokens.primitives).length + Object.keys(tokens.light).length + Object.keys(tokens.typography).length) + ' توکن با فیگما یکی است.'),
};

export const FigmaCoverage = {
  name: 'Figma coverage',
  parameters: { docs: { description: { component: 'کدام بخش‌های دیزاین‌سیستم در فیگما ساخته شده‌اند و کدام هنوز نه.' } } },
  render: () => el('table', 'sb-table', [
    el('thead', '', el('tr', '', ['بخش', 'فیگما'].map(t => el('th', '', t)))),
    el('tbody', '', Object.keys(figma).map(name => el('tr', '', [el('td', '', name), el('td', '', figmaUrl(name) ? Object.assign(el('a', '', 'باز کردن ↗'), { href: figmaUrl(name), target: '_blank' }) : '✗ باید ساخته شود')]))),
  ]),
};

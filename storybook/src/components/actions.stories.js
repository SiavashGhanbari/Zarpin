import { button, iconButton, iconNames, row, sizes, variants } from '../ds/components.js';
import { docs } from '../ds/figma.js';

const iconOptions = ['', ...iconNames];

export default {
  title: 'Components/Button',
  render: button,
  parameters: docs('Button', 'دکمهٔ اصلی اپ. `variant` نوع، `color` رنگ (عادی یا حذف)، `size` ارتفاع ۲۴ تا ۵۶ پیکسل.'),
  args: { label: 'خرید طلا', variant: 'fill', color: 'neutral', size: 'xl', rounded: false, block: false, disabled: false, loading: false, leadingIcon: '', trailingIcon: '' },
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'inline-radio', options: variants },
    color: { control: 'inline-radio', options: ['neutral', 'danger'] },
    size: { control: 'inline-radio', options: sizes },
    leadingIcon: { control: 'select', options: iconOptions },
    trailingIcon: { control: 'select', options: iconOptions },
  },
};

export const Playground = {};
const off = { controls: { disable: true } };
const labels = { fill: 'پُر', tonal: 'کم‌رنگ', border: 'دورخط', naked: 'بدون پس‌زمینه', link: 'لینک' };
export const Variants = { parameters: off, render: () => row(variants.map(variant => button({ label: labels[variant], variant, size: 'lg' }))) };
export const Danger = { parameters: off, render: () => row(variants.map(variant => button({ label: 'حذف کارت', variant, color: 'danger', size: 'lg' }))) };
export const Sizes = { parameters: off, render: () => row(sizes.slice().reverse().map(size => button({ label: 'ادامه', size }))) };
export const States = { parameters: off, render: () => row([button({ label: 'ادامه' }), button({ label: 'ادامه', disabled: true }), button({ label: 'ادامه', loading: true })]) };
export const WithIcons = { parameters: off, render: () => row([button({ label: 'افزودن کارت', leadingIcon: 'add', variant: 'tonal', size: 'lg' }), button({ label: 'بعدی', trailingIcon: 'arrow-left', size: 'lg' })]) };

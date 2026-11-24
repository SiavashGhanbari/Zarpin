import { divider, iconNames, row, stack, tag, tagColors } from '../ds/components.js';
import { docs } from '../ds/figma.js';

export default {
  title: 'Components/Tag',
  render: tag,
  parameters: docs('Tag', 'برچسب کوتاه وضعیت یا مقدار. `removable` برای تگ‌های قابل حذف (مثل IPها).'),
  args: { label: '۲۳٫۵٪', color: 'gold', variant: 'tonal', size: 'md', leadingIcon: '', trailingIcon: '', removable: false },
  argTypes: {
    color: { control: 'inline-radio', options: tagColors }, variant: { control: 'inline-radio', options: ['tonal', 'fill'] },
    size: { control: 'inline-radio', options: ['xs', 'sm', 'md', 'lg'] },
    leadingIcon: { control: 'select', options: ['', ...iconNames] }, trailingIcon: { control: 'select', options: ['', ...iconNames] },
  },
};
const names = { neutral: 'عادی', gold: 'جدید', green: 'موفق', red: 'ناموفق', blue: 'در حال بررسی' };
const off = { controls: { disable: true } };
export const Playground = {};
export const Colors = { parameters: off, render: () => stack([row(tagColors.map(color => tag({ label: names[color], color })), 8), row(tagColors.map(color => tag({ label: names[color], color, variant: 'fill' })), 8)]) };
export const Sizes = { parameters: off, render: () => row(['lg', 'md', 'sm', 'xs'].map(size => tag({ label: 'طلای ۱۸ عیار', color: 'gold', size })), 8) };
export const Removable = { parameters: off, render: () => row(['185.143.232.10', '91.98.12.40'].map(label => tag({ label, removable: true })), 8) };

export const Divider = {
  parameters: { ...off, ...docs('Divider', 'خط جداکننده با سه سطح شدت. برای فاصلهٔ بین بخش‌های صفحه از `.zp-section-gap` استفاده کنید.') },
  render: () => stack([1, 2, 3].map(level => stack([document.createTextNode('سطح ' + level), divider({ level })], 8)), 16),
};

import { iconButton, iconNames, row, sizes, variants } from '../ds/components.js';
import { docs } from '../ds/figma.js';

export default {
  title: 'Components/Icon Button',
  render: iconButton,
  parameters: docs('Icon button', 'دکمهٔ فقط‌آیکون. `label` برای صفحه‌خوان الزامی است.'),
  args: { icon: 'arrow-right', label: 'بازگشت', variant: 'tonal', color: 'neutral', size: 'md', rounded: true, disabled: false },
  argTypes: {
    icon: { control: 'select', options: iconNames },
    variant: { control: 'inline-radio', options: variants.filter(v => v !== 'link') },
    color: { control: 'inline-radio', options: ['neutral', 'danger'] },
    size: { control: 'inline-radio', options: sizes },
  },
};
export const Playground = {};
export const Variants = {
  parameters: { controls: { disable: true } },
  render: () => row(['fill', 'tonal', 'border', 'naked'].map(variant => iconButton({ icon: 'search', label: 'جست‌وجو', variant }))),
};
export const Sizes = {
  parameters: { controls: { disable: true } },
  render: () => row(sizes.slice().reverse().map(size => iconButton({ icon: 'close', label: 'بستن', size }))),
};

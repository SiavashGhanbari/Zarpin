import { actionSizes, actionVariants, button, iconNames, row } from '../components.js';

export default {
  title: 'Components/Icon Button',
  render: args => button({ ...args, iconOnly: true, leadingIcon: args.icon }),
  args: { label: 'جست‌وجو', icon: 'search', variant: 'border', tone: 'neutral', size: 'md', rounded: false, disabled: false },
  argTypes: {
    label: { control: 'text' },
    icon: { control: 'select', options: iconNames },
    variant: { control: 'select', options: actionVariants },
    tone: { control: 'select', options: ['neutral', 'danger'] },
    size: { control: 'select', options: actionSizes },
    rounded: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export const Interactive = {};

export const Shapes = {
  parameters: { controls: { disable: true } },
  render: () => row([
    button({ iconOnly: true, label: 'افزودن', leadingIcon: 'add', size: 'md' }),
    button({ iconOnly: true, label: 'بازگشت', leadingIcon: 'arrow-right', size: 'md', rounded: true }),
    button({ iconOnly: true, label: 'جست‌وجو', leadingIcon: 'search', size: 'md', variant: 'border', disabled: true }),
  ]),
};

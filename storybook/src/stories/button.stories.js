import { actionSizes, actionVariants, button, iconNames, row } from '../components.js';

export default {
  title: 'Components/Button',
  render: button,
  args: {
    label: 'ادامه', variant: 'fill', tone: 'neutral', size: 'xl',
    rounded: false, disabled: false, loading: false, leadingIcon: '', trailingIcon: '',
  },
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'select', options: actionVariants },
    tone: { control: 'select', options: ['neutral', 'danger'] },
    size: { control: 'select', options: actionSizes },
    rounded: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    leadingIcon: { control: 'select', options: ['', ...iconNames] },
    trailingIcon: { control: 'select', options: ['', ...iconNames] },
  },
};

export const Interactive = {};

export const Variants = {
  parameters: { controls: { disable: true } },
  render: () => row(actionVariants.map(variant => button({ label: variant, variant, size: 'lg' }))),
};

export const Sizes = {
  parameters: { controls: { disable: true } },
  render: () => row(actionSizes.map(size => button({ label: size.toUpperCase(), size }))),
};

export const States = {
  parameters: { controls: { disable: true } },
  render: () => row([
    button({ label: 'عادی' }),
    button({ label: 'غیرفعال', disabled: true }),
    button({ label: 'در حال بارگذاری', loading: true }),
    button({ label: 'حذف', tone: 'danger' }),
  ]),
};

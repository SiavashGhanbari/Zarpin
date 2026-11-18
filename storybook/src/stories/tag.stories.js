import { iconNames, row, tag, tagTones } from '../components.js';

export default {
  title: 'Components/Tag',
  render: tag,
  args: { label: 'جدید', tone: 'gold', variant: 'tonal', size: 'md', leadingIcon: '', trailingIcon: '' },
  argTypes: {
    label: { control: 'text' },
    tone: { control: 'select', options: tagTones },
    variant: { control: 'select', options: ['tonal', 'fill'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
    leadingIcon: { control: 'select', options: ['', ...iconNames] },
    trailingIcon: { control: 'select', options: ['', ...iconNames] },
  },
};

const labels = { neutral: 'عادی', gold: 'جدید', green: 'موفق', red: 'ناموفق', blue: 'اطلاع‌رسانی' };

export const Interactive = {};

export const Tonal = {
  parameters: { controls: { disable: true } },
  render: () => row(tagTones.map(tone => tag({ label: labels[tone], tone }))),
};

export const Fill = {
  parameters: { controls: { disable: true } },
  render: () => row(tagTones.map(tone => tag({ label: labels[tone], tone, variant: 'fill' }))),
};

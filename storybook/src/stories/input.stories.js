import { input } from '../components.js';

export default {
  title: 'Components/Input',
  render: input,
  args: {
    label: 'مبلغ به تومان', placeholder: 'مثلاً ۱۰۰٬۰۰۰', hint: 'مبلغ را به تومان وارد کنید.',
    value: '', error: '', disabled: false, direction: 'rtl', inputMode: 'text',
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    hint: { control: 'text' },
    value: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    direction: { control: 'select', options: ['rtl', 'ltr'] },
    inputMode: { control: 'select', options: ['text', 'numeric', 'decimal', 'tel'] },
  },
};

export const Interactive = {};

export const Error = {
  args: { value: '۰', error: 'مبلغ باید بیشتر از صفر باشد.', inputMode: 'numeric' },
};

export const Disabled = {
  args: { label: 'دارایی', value: 'طلای ۱۸ عیار', hint: '', disabled: true },
};

export const Phone = {
  args: { label: 'شمارهٔ موبایل', placeholder: '۰۹۱۲۱۲۳۴۵۶۷', hint: '', direction: 'ltr', inputMode: 'tel' },
};

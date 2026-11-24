import { button, stack, textField } from '../ds/components.js';
import { docs } from '../ds/figma.js';

export default {
  title: 'Components/Text Field',
  render: args => { const n = textField(args); n.style.maxInlineSize = '360px'; return n; },
  parameters: docs('Text field', 'ورودی متن با عنوان، راهنما و خطا. برای شماره، IP و کد از `dir: ltr` استفاده کنید.'),
  args: { label: 'شماره موبایل', placeholder: '۰۹۱۲۳۴۵۶۷۸۹', value: '', help: '', error: '', disabled: false, focused: false, dir: 'ltr', inputMode: 'tel', suffix: '' },
  argTypes: { dir: { control: 'inline-radio', options: ['rtl', 'ltr'] }, inputMode: { control: 'select', options: ['text', 'numeric', 'decimal', 'tel'] } },
};
export const Playground = {};
export const States = {
  parameters: { controls: { disable: true } },
  render: () => {
    const s = stack([
      textField({ label: 'خالی', placeholder: 'کد ملی ۱۰ رقمی', dir: 'ltr' }),
      textField({ label: 'فعال', value: '۰۰۱۲۳۴', focused: true, dir: 'ltr' }),
      textField({ label: 'پرشده', value: '۰۰۱۲۳۴۵۶۷۸', dir: 'ltr', help: 'کد ملی صاحب این شماره موبایل' }),
      textField({ label: 'خطا', value: '۱۲۳۴۵', dir: 'ltr', error: 'کد ملی باید ۱۰ رقم باشد.' }),
      textField({ label: 'غیرفعال', value: 'طلای ۱۸ عیار', disabled: true }),
    ], 20);
    s.style.maxInlineSize = '360px';
    return s;
  },
};
export const WithAction = {
  parameters: { controls: { disable: true } },
  render: () => { const n = textField({ label: 'IPهای مجاز', placeholder: '185.143.232.10', dir: 'ltr', action: button({ label: 'افزودن', variant: 'tonal', size: 'lg' }) }); n.style.maxInlineSize = '360px'; return n; },
};
export const WithSuffix = {
  parameters: { controls: { disable: true } },
  render: () => { const n = textField({ label: 'مبلغ', value: '۵٬۰۰۰٬۰۰۰', suffix: 'تومان', dir: 'ltr', inputMode: 'numeric' }); n.style.maxInlineSize = '360px'; return n; },
};

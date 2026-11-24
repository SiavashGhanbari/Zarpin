import { icon, option, stack } from '../ds/components.js';
import { docs } from '../ds/figma.js';

export default {
  title: 'Components/Option Row',
  render: args => { const n = option(args); n.style.maxInlineSize = '360px'; return n; },
  parameters: docs('Option row', 'ردیف انتخاب با عنوان و توضیح؛ برای تعهدنامه، دسترسی‌ها، روش پرداخت و تنظیمات. `locked` یعنی همیشه فعال و غیرقابل‌تغییر.'),
  args: { control: 'checkbox', title: 'معامله', description: 'ثبت و لغو سفارش خرید و فروش طلا و نقره', meta: '', checked: false, disabled: false, locked: false, error: false },
  argTypes: { control: { control: 'inline-radio', options: ['checkbox', 'radio', 'switch'] } },
};
export const Playground = {};
const off = { controls: { disable: true } };
const narrow = n => { n.style.maxInlineSize = '360px'; return n; };
export const Permissions = {
  parameters: off,
  render: () => narrow(stack([
    option({ title: 'خواندن', description: 'دریافت قیمت‌ها، موجودی کیف پول و تاریخچهٔ سفارش‌ها', meta: 'همیشه فعال', locked: true }),
    option({ title: 'معامله', description: 'ثبت و لغو سفارش خرید و فروش طلا و نقره' }),
  ], 8)),
};
export const Consent = {
  parameters: off,
  render: () => narrow(stack([
    option({ link: 'شروط تعهدات و الزامات قرارداد', title: 'را تایید می‌کنم.', plain: true }),
    option({ link: 'شروط تعهدات و الزامات قرارداد', title: 'را تایید می‌کنم.', plain: true, error: true }),
  ], 8)),
};
export const PaymentMethod = {
  parameters: off,
  render: () => narrow(stack([
    option({ control: 'radio', name: 'pay', title: 'درگاه بانکی', description: 'پرداخت با کارت بانکی', media: icon('document'), checked: true }),
    option({ control: 'radio', name: 'pay', title: 'موجودی تومانی', description: 'پرداخت از کیف پول', media: icon('copy') }),
    option({ control: 'radio', name: 'pay', title: 'واریز بانکی', description: 'به‌زودی', media: icon('clock'), disabled: true }),
  ], 8)),
};
export const Setting = { parameters: off, render: () => narrow(option({ control: 'switch', title: 'تمدید خودکار', description: 'تمدید سپرده در سررسید', checked: true })) };

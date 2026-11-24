import { button, dateWheel, dialog, el, option, sheet, stack, textField } from '../ds/components.js';
import { docs } from '../ds/figma.js';
import warning from '../ds/images/warning.png?url';

const screen = node => { const s = el('div', 'sb-screen', el('div', 'zp-scrim', node)); return s; };

export default {
  title: 'Components/Bottom Sheet',
  parameters: docs('Bottom sheet', 'برگهٔ پایین: دستگیره، عنوان، دکمهٔ بستن، محتوا و دکمه‌های پایین. کیبورد که باز شود، برگه بالای آن می‌ماند.'),
  args: { title: 'احراز هویت', close: true, handle: true, actions: 1 },
  argTypes: { actions: { control: { type: 'range', min: 0, max: 2 } } },
  render: ({ actions, ...args }) => screen(sheet({
    ...args,
    body: [el('p', '', 'برای ادامه، کد ملی و تاریخ تولد خود را وارد کنید.'), textField({ label: 'کد ملی', placeholder: 'کد ملی ۱۰ رقمی', dir: 'ltr' })],
    actions: [button({ label: 'تایید و احراز', size: 'lg' }), button({ label: 'بعداً', variant: 'tonal', size: 'lg' })].slice(0, actions),
  })),
};
export const Playground = {};
export const DatePicker = {
  parameters: { controls: { disable: true }, ...docs('Date picker', 'انتخاب تاریخ شمسی در برگهٔ پایین.') },
  render: () => screen(sheet({ title: 'تاریخ تولد', body: [dateWheel()], actions: [button({ label: 'تایید', size: 'lg' })] })),
};
export const Terms = {
  parameters: { controls: { disable: true } },
  render: () => screen(sheet({ title: 'قوانین و مقررات', body: ['۱. کاربر متعهد می‌شود اطلاعات هویتی خود را صحیح و کامل وارد کند.', '۲. حساب کاربری شخصی است و قابل واگذاری نیست.'], actions: [button({ label: 'متوجه شدم', size: 'lg' })] })),
};
export const Dialog = {
  parameters: { controls: { disable: true }, ...docs('Dialog', 'تأیید کارهای مهم یا برگشت‌ناپذیر. در حالت حذف، دکمهٔ حذف قرمز و دورخط است و «انصراف» دکمهٔ اصلی.') },
  render: () => screen(dialog({ title: 'حذف کلید «ربات معاملاتی»', text: 'با حذف این API، همهٔ نرم‌افزارها و ربات‌هایی که از آن استفاده می‌کنند فوراً قطع می‌شوند. این کار برگشت‌پذیر نیست.', image: warning, primary: 'انصراف', secondary: 'حذف API', danger: true })),
};

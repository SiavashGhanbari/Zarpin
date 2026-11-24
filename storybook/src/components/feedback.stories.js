import { banner, button, snackbar, stack, toast, tones, tooltip } from '../ds/components.js';
import { docs } from '../ds/figma.js';

export default { title: 'Components/Feedback' };
const narrow = n => { n.style.maxInlineSize = '360px'; return n; };

export const Toast = {
  parameters: docs('Toast', 'پیام کوتاه و موقت بالای صفحه، بعد از یک کار (کپی، ذخیره، حذف). خودش بعد از چند ثانیه می‌رود.'),
  args: { message: 'API Key کپی شد', tone: 'success' },
  argTypes: { tone: { control: 'inline-radio', options: ['success', 'error', 'info'] } },
  render: toast,
};
export const Banner = {
  parameters: docs('Banner', 'پیام ثابت داخل صفحه: اطلاع، هشدار، خطا یا موفقیت. `strong` جملهٔ پررنگ ابتدا، `link` لینک انتها.'),
  args: { tone: 'info', strong: '', text: 'هر کلید فقط از IPهای مجاز خودش کار می‌کند. حداکثر ۳ API فعال می‌توانید داشته باشید.', link: 'مستندات', showIcon: true, shadow: false },
  argTypes: { tone: { control: 'inline-radio', options: tones } },
  render: args => narrow(banner(args)),
};
export const BannerTones = {
  parameters: { controls: { disable: true } },
  render: () => narrow(stack([
    banner({ tone: 'info', text: 'هر کلید فقط از IPهای مجاز خودش کار می‌کند.', link: 'مستندات' }),
    banner({ tone: 'success', text: 'احراز هویت با موفقیت انجام شد.' }),
    banner({ tone: 'warning', strong: 'Secret Key فقط همین یک بار نمایش داده می‌شود.', text: 'آن را در جای امنی یادداشت کنید.' }),
    banner({ tone: 'error', text: 'کد ملی و تاریخ تولد با مالک این شماره موبایل مطابقت ندارد.' }),
  ], 8)),
};
export const Snackbar = {
  parameters: docs('Snackbar', 'کارت اطلاعیه با عنوان و متن؛ برای اعلان‌های مهم بالای صفحه (مثل قطعی برنامه‌ریزی‌شده).'),
  args: { tone: 'warning', title: 'اطلاعیه', text: 'پنجشنبه ۱۸ تیر، از ساعت ۰۰:۰۱ تا ۰۳:۰۰ موقتاً در دسترس نخواهیم بود.', action: true },
  argTypes: { tone: { control: 'inline-radio', options: tones } },
  render: args => narrow(snackbar(args)),
};
export const Tooltip = {
  parameters: docs('Tooltip', 'توضیح کوتاه کنار یک مقدار؛ با زدن روی آیکون اطلاعات باز می‌شود.'),
  args: { text: 'وضعیت دارایی شما در نقطهٔ سلامت است؛ فاصلهٔ ارزش دارایی تا حد لیکوئید مناسب است.', placement: 'top' },
  argTypes: { placement: { control: 'inline-radio', options: ['top', 'bottom'] } },
  render: tooltip,
};

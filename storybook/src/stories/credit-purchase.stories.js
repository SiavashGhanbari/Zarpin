const preview = (title, route, state) => () => {
  const frame = document.createElement('iframe');
  frame.title = title;
  const url = new URL('./prototype/index.html', document.baseURI);
  url.searchParams.set('p', route);
  if (state) url.searchParams.set('creditState', state);
  frame.src = url.href;
  frame.style.cssText = 'display:block;width:100%;height:850px;border:0';
  return frame;
};

export default {
  title: 'Patterns/Credit purchase',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'نمونه‌ها از همان فایل پروتوتایپ ساخته می‌شوند. ثبت درخواست و پرداخت‌ها در محیط آزمایشی انجام می‌شوند. از پنل «خرید اعتباری» می‌توانید مستقیماً به حالت‌های مختلف بروید.',
      },
    },
  },
};

export const HomeEntry = { render: preview('ورودی خرید اعتباری در هوم', 'Home') };
export const Introduction = { render: preview('معرفی خرید قسطی', 'Credit') };
export const Request = { render: preview('درخواست اعتبار', 'Credit/Request') };
export const NoProvider = { render: preview('بدون تأمین‌کننده', 'Credit/Request', 'empty') };
export const Details = { render: preview('جزئیات قسط زرپین', 'Credit/Details') };
export const ExternalProvider = { render: preview('جزئیات قسط تأمین‌کننده', 'Credit/Request', 'partnerQuote') };
export const Pending = { render: preview('درخواست در حال بررسی', 'Credit', 'pending') };
export const Active = { render: preview('اعتبار فعال زرپین', 'Credit/View') };
export const Collateral = { render: preview('افزایش وثیقه', 'Credit/Collateral') };
export const PayInstallment = { render: preview('پرداخت قسط', 'Credit/View', 'payment') };
export const History = { render: preview('تاریخچه اعتبارها', 'Credit/History') };

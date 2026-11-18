# Storybook زرپین

کاتالوگ کامپوننت‌های HTML زرپین با نمونه‌های فارسی و راست‌به‌چپ. نمونه‌ها در نوار ابزار بین حالت روشن و تیره جابه‌جا می‌شوند.

## اجرا

از ریشهٔ مخزن با Node.js 24 و pnpm 11 اجرا کنید.

```sh
cd storybook
pnpm install --frozen-lockfile
pnpm storybook
```

پیش‌نمایش روی [localhost:6006](http://localhost:6006/) باز می‌شود. برای خروجی استاتیک اجرا کنید.

```sh
pnpm build-storybook
```

خروجی در `storybook-static/` قرار می‌گیرد.

## نمونه‌های موجود

- **Foundations** رنگ‌های پایه، توکن‌های معنایی در هر دو تم و مقیاس تایپوگرافی یکان‌بخ
- **Components** دکمه، دکمهٔ آیکونی، ورودی و تگ با کنترل‌های متن، اندازه، گونه و وضعیت
- **Patterns** فرم نمونهٔ مبلغ با ارقام فارسی و نمایش وضعیت خطا و خلاصه

## افزودن نمونه

۱. نمونهٔ جدید را در `src/stories/` با نام `*.stories.js` اضافه کنید. نمونه‌های مربوط به رنگ و تایپوگرافی در `src/foundations/` قرار دارند.

۲. اگر کامپوننتی مشترک است، تابع سازندهٔ HTML آن را در `src/components.js` قرار دهید. استایلش در `src/components.css` برای رنگ، فاصلهٔ تایپوگرافی و وزن متن تا جای ممکن از توکن‌های موجود استفاده می‌کند.

۳. برای حالت‌های مهم یک export جدا اضافه کنید. کنترل‌ها را در `argTypes` صریح تعریف کنید تا در نمونهٔ تعاملی قابل‌ویرایش باشند.

```js
import { button } from '../components.js';

export default {
  title: 'Components/Example',
  render: button,
  args: { label: 'ادامه', disabled: false },
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {};
export const Disabled = { args: { disabled: true } };
```

## منبع طراحی

`scripts/prepare-foundations.mjs` در زمان اجرا و ساخت، توکن‌های CSS و فونت را از `../index.html` می‌خواند. فایل‌های `src/generated/` دوباره ساخته می‌شوند. برای به‌روز کردن آن‌ها پس از تغییر توکن‌ها، `pnpm prepare:foundations` را اجرا کنید و Storybook را دوباره راه بیندازید.

نمونه‌های اجزا برای نمایش و گسترش در این کاتالوگ ساخته شده‌اند. برای بررسی ظاهر و اندازه‌های هر گونه به [دیزاین سیستم در فیگما](https://www.figma.com/design/QiMNwDbc3gNGNJ6S2WXdJS/Zarpin-%E2%80%94-Design-System) مراجعه کنید.

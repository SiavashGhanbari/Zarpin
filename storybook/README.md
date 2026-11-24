# دیزاین‌سیستم زرپین (Storybook)

این پوشه **منبع اصلی** دیزاین‌سیستم اپ است. اپ (`../index.html`) توکن‌ها و کامپوننت‌ها را از اینجا می‌گیرد.

## چی کجاست

| بخش | فایل |
|---|---|
| توکن‌ها: رنگ، تایپوگرافی، فونت | `tokens/tokens.css` |
| ظاهر کامپوننت‌ها (کلاس‌های `.zp-*`) | `src/ds/components.css` |
| ساختار کامپوننت‌ها (تابع سازنده) | `src/ds/components.js` |
| آیکون‌ها، با نام فیگما | `src/ds/icons/` و `src/ds/icons.json` |
| لینک فیگمای هر کامپوننت | `src/ds/figma.js` |
| عکس فوری متغیرهای فیگما | `tokens/figma-variables.txt` |
| نمونه‌ها (Storyها) | `src/foundations/`، `src/components/`، `src/patterns/` |

## دستورها

با Node.js ۲۲ یا بالاتر و pnpm ۱۰:

```sh
cd storybook
pnpm install --frozen-lockfile
pnpm storybook        # پیش‌نمایش روی localhost:6006
pnpm sync:app         # کپی توکن‌ها و کامپوننت‌ها در index.html — بعد از هر تغییر
pnpm check            # اپ عقب نیفتاده؟ توکن‌ها با فیگما یکی‌اند؟
pnpm build-storybook  # خروجی استاتیک در storybook-static/
```

## روند کار

۱. کامپوننت یا توکن را اینجا تغییر بده و در Storybook ببین.
۲. `pnpm sync:app` را بزن تا اپ همان را بگیرد. در `index.html` بلوک «Zarpin design system» دستی ویرایش نمی‌شود.
۳. `pnpm check` باید هر دو خط را ✓ نشان دهد.

## توکن‌ها و فیگما

`tokens/figma-variables.txt` عکس فوری متغیرهای فایل فیگمای «Zarpin — Design System» است. صفحهٔ **Foundations ← Figma sync** تفاوت‌ها را نشان می‌دهد. وقتی متغیری در فیگما عوض شد، این فایل دوباره از فیگما خروجی گرفته می‌شود (از Claude بخواهید «متغیرهای فیگما را به‌روز کن»).

## افزودن کامپوننت

۱. ظاهر را در `src/ds/components.css` با پیشوند `.zp-` و فقط با توکن‌ها بنویس.
۲. تابع سازنده را در `src/ds/components.js` اضافه کن.
۳. Story را در `src/components/` بساز: یک `Playground` با کنترل‌ها و یک Story برای حالت‌ها. برچسب‌ها فارسی و واقعی باشند.
۴. لینک فیگما را در `src/ds/figma.js` بگذار؛ اگر هنوز در فیگما نیست `null` بماند تا در «Figma coverage» دیده شود.

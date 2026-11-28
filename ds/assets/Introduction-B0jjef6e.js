import{u as c,j as n,M as r}from"./blocks-DTViqMsZ.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DywuSqcy.js";function o(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Introduction"}),`
`,n.jsxs("div",{dir:"rtl",lang:"fa",children:[n.jsx(s.h1,{id:"دیزاینسیستم-زرپین",children:"دیزاین‌سیستم زرپین"}),n.jsxs(s.p,{children:["این Storybook ",n.jsx(s.strong,{children:"منبع اصلی"})," دیزاین‌سیستم اپ است. اپ (",n.jsx(s.code,{children:"index.html"}),") از روی همین ساخته می‌شود."]}),n.jsx(s.h2,{id:"چی-کجاست",children:"چی کجاست"}),n.jsxs(s.p,{children:[`| بخش | فایل | توضیح |
|---|---|---|
| توکن‌ها (رنگ، تایپ، فونت) | `,n.jsx(s.code,{children:"storybook/tokens/tokens.css"}),` | فقط همین‌جا ویرایش شود |
| کامپوننت‌ها (ظاهر) | `,n.jsx(s.code,{children:"storybook/src/ds/components.css"})," | کلاس‌های ",n.jsx(s.code,{children:".zp-*"}),` |
| کامپوننت‌ها (ساختار) | `,n.jsx(s.code,{children:"storybook/src/ds/components.js"}),` | تابع سازندهٔ هر کامپوننت |
| آیکون‌ها | `,n.jsx(s.code,{children:"storybook/src/ds/icons/"}),` | با همان نام فیگما |
| نسخهٔ فیگما | `,n.jsx(s.code,{children:"storybook/tokens/figma-variables.txt"})," | عکس فوری متغیرهای فیگما برای مقایسه |"]}),n.jsx(s.h2,{id:"سه-دستور",children:"سه دستور"}),n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"pnpm storybook"})," — همین صفحه را روی کامپیوتر باز می‌کند."]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"pnpm sync:app"})," — توکن‌ها و کامپوننت‌ها را در ",n.jsx(s.code,{children:"index.html"})," کپی می‌کند. ",n.jsx(s.strong,{children:"بعد از هر تغییر در دیزاین‌سیستم اجرا شود."})]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"pnpm check"})," — می‌گوید اپ از دیزاین‌سیستم عقب است یا نه، و توکن‌ها با فیگما یکی‌اند یا نه."]}),`
`]}),n.jsx(s.h2,{id:"قاعده",children:"قاعده"}),n.jsx(s.p,{children:`۱. کامپوننت تازه اول اینجا ساخته می‌شود، بعد در اپ استفاده می‌شود.
۲. در اپ رنگ و اندازه دستی نوشته نمی‌شود؛ فقط کلاس‌ها و توکن‌های همین سیستم.
۳. هر کامپوننت به نسخهٔ فیگمایش لینک دارد؛ آن‌هایی که در فیگما نیستند در «Foundations ← Figma coverage» آمده‌اند.`})]})]})}function l(e={}){const{wrapper:s}={...c(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(o,{...e})}):o(e)}export{l as default};

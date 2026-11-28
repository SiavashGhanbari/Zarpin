import{t as c,d as i,e as p,f as n,a as A,g as F}from"./components-D17UtYzI.js";import{d as a}from"./figma-mXTg7bIj.js";const m={title:"Components/Feedback"},C=u=>(u.style.maxInlineSize="360px",u),e={parameters:a("Toast","پیام کوتاه و موقت بالای صفحه، بعد از یک کار (کپی، ذخیره، حذف). خودش بعد از چند ثانیه می‌رود."),args:{message:"API Key کپی شد",tone:"success"},argTypes:{tone:{control:"inline-radio",options:["success","error","info"]}},render:i},r={parameters:a("Banner","پیام ثابت داخل صفحه: اطلاع، هشدار، خطا یا موفقیت. `strong` جملهٔ پررنگ ابتدا، `link` لینک انتها."),args:{tone:"info",strong:"",text:"هر کلید فقط از IPهای مجاز خودش کار می‌کند. حداکثر ۳ API فعال می‌توانید داشته باشید.",link:"مستندات",showIcon:!0,shadow:!1},argTypes:{tone:{control:"inline-radio",options:c}},render:u=>C(n(u))},o={parameters:{controls:{disable:!0}},render:()=>C(A([n({tone:"info",text:"هر کلید فقط از IPهای مجاز خودش کار می‌کند.",link:"مستندات"}),n({tone:"success",text:"احراز هویت با موفقیت انجام شد."}),n({tone:"warning",strong:"Secret Key فقط همین یک بار نمایش داده می‌شود.",text:"آن را در جای امنی یادداشت کنید."}),n({tone:"error",text:"کد ملی و تاریخ تولد با مالک این شماره موبایل مطابقت ندارد."})],8))},t={parameters:a("Snackbar","کارت اطلاعیه با عنوان و متن؛ برای اعلان‌های مهم بالای صفحه (مثل قطعی برنامه‌ریزی‌شده)."),args:{tone:"warning",title:"اطلاعیه",text:"پنجشنبه ۱۸ تیر، از ساعت ۰۰:۰۱ تا ۰۳:۰۰ موقتاً در دسترس نخواهیم بود.",action:!0},argTypes:{tone:{control:"inline-radio",options:c}},render:u=>C(F(u))},s={parameters:a("Tooltip","توضیح کوتاه کنار یک مقدار؛ با زدن روی آیکون اطلاعات باز می‌شود."),args:{text:"وضعیت دارایی شما در نقطهٔ سلامت است؛ فاصلهٔ ارزش دارایی تا حد لیکوئید مناسب است.",placement:"top"},argTypes:{placement:{control:"inline-radio",options:["top","bottom"]}},render:p},g=["Toast","Banner","BannerTones","Snackbar","Tooltip"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: docs('Toast', 'پیام کوتاه و موقت بالای صفحه، بعد از یک کار (کپی، ذخیره، حذف). خودش بعد از چند ثانیه می‌رود.'),
  args: {
    message: 'API Key کپی شد',
    tone: 'success'
  },
  argTypes: {
    tone: {
      control: 'inline-radio',
      options: ['success', 'error', 'info']
    }
  },
  render: toast
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: docs('Banner', 'پیام ثابت داخل صفحه: اطلاع، هشدار، خطا یا موفقیت. \`strong\` جملهٔ پررنگ ابتدا، \`link\` لینک انتها.'),
  args: {
    tone: 'info',
    strong: '',
    text: 'هر کلید فقط از IPهای مجاز خودش کار می‌کند. حداکثر ۳ API فعال می‌توانید داشته باشید.',
    link: 'مستندات',
    showIcon: true,
    shadow: false
  },
  argTypes: {
    tone: {
      control: 'inline-radio',
      options: tones
    }
  },
  render: args => narrow(banner(args))
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => narrow(stack([banner({
    tone: 'info',
    text: 'هر کلید فقط از IPهای مجاز خودش کار می‌کند.',
    link: 'مستندات'
  }), banner({
    tone: 'success',
    text: 'احراز هویت با موفقیت انجام شد.'
  }), banner({
    tone: 'warning',
    strong: 'Secret Key فقط همین یک بار نمایش داده می‌شود.',
    text: 'آن را در جای امنی یادداشت کنید.'
  }), banner({
    tone: 'error',
    text: 'کد ملی و تاریخ تولد با مالک این شماره موبایل مطابقت ندارد.'
  })], 8))
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: docs('Snackbar', 'کارت اطلاعیه با عنوان و متن؛ برای اعلان‌های مهم بالای صفحه (مثل قطعی برنامه‌ریزی‌شده).'),
  args: {
    tone: 'warning',
    title: 'اطلاعیه',
    text: 'پنجشنبه ۱۸ تیر، از ساعت ۰۰:۰۱ تا ۰۳:۰۰ موقتاً در دسترس نخواهیم بود.',
    action: true
  },
  argTypes: {
    tone: {
      control: 'inline-radio',
      options: tones
    }
  },
  render: args => narrow(snackbar(args))
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: docs('Tooltip', 'توضیح کوتاه کنار یک مقدار؛ با زدن روی آیکون اطلاعات باز می‌شود.'),
  args: {
    text: 'وضعیت دارایی شما در نقطهٔ سلامت است؛ فاصلهٔ ارزش دارایی تا حد لیکوئید مناسب است.',
    placement: 'top'
  },
  argTypes: {
    placement: {
      control: 'inline-radio',
      options: ['top', 'bottom']
    }
  },
  render: tooltip
}`,...s.parameters?.docs?.source}}};export{r as Banner,o as BannerTones,t as Snackbar,e as Toast,s as Tooltip,g as __namedExportsOrder,m as default};

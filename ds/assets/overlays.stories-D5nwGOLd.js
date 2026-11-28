import{C,b as s,D as i,E as d,F as o,B as A}from"./components-D17UtYzI.js";import{d as l}from"./figma-mXTg7bIj.js";const m=""+new URL("warning-Ba9ZGMZf.png",import.meta.url).href,t=n=>o("div","sb-screen",o("div","zp-scrim",n)),F={title:"Components/Bottom Sheet",parameters:l("Bottom sheet","برگهٔ پایین: دستگیره، عنوان، دکمهٔ بستن، محتوا و دکمه‌های پایین. کیبورد که باز شود، برگه بالای آن می‌ماند."),args:{title:"احراز هویت",close:!0,handle:!0,actions:1},argTypes:{actions:{control:{type:"range",min:0,max:2}}},render:({actions:n,...c})=>t(C({...c,body:[o("p","","برای ادامه، کد ملی و تاریخ تولد خود را وارد کنید."),A({label:"کد ملی",placeholder:"کد ملی ۱۰ رقمی",dir:"ltr"})],actions:[s({label:"تایید و احراز",size:"lg"}),s({label:"بعداً",variant:"tonal",size:"lg"})].slice(0,n)}))},u={},e={parameters:{controls:{disable:!0},...l("Date picker","انتخاب تاریخ شمسی در برگهٔ پایین.")},render:()=>t(C({title:"تاریخ تولد",body:[i()],actions:[s({label:"تایید",size:"lg"})]}))},r={parameters:{controls:{disable:!0}},render:()=>t(C({title:"قوانین و مقررات",body:["۱. کاربر متعهد می‌شود اطلاعات هویتی خود را صحیح و کامل وارد کند.","۲. حساب کاربری شخصی است و قابل واگذاری نیست."],actions:[s({label:"متوجه شدم",size:"lg"})]}))},a={parameters:{controls:{disable:!0},...l("Dialog","تأیید کارهای مهم یا برگشت‌ناپذیر. در حالت حذف، دکمهٔ حذف قرمز و دورخط است و «انصراف» دکمهٔ اصلی.")},render:()=>t(d({title:"حذف کلید «ربات معاملاتی»",text:"با حذف این API، همهٔ نرم‌افزارها و ربات‌هایی که از آن استفاده می‌کنند فوراً قطع می‌شوند. این کار برگشت‌پذیر نیست.",image:m,primary:"انصراف",secondary:"حذف API",danger:!0}))},b=["Playground","DatePicker","Terms","Dialog"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    ...docs('Date picker', 'انتخاب تاریخ شمسی در برگهٔ پایین.')
  },
  render: () => screen(sheet({
    title: 'تاریخ تولد',
    body: [dateWheel()],
    actions: [button({
      label: 'تایید',
      size: 'lg'
    })]
  }))
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => screen(sheet({
    title: 'قوانین و مقررات',
    body: ['۱. کاربر متعهد می‌شود اطلاعات هویتی خود را صحیح و کامل وارد کند.', '۲. حساب کاربری شخصی است و قابل واگذاری نیست.'],
    actions: [button({
      label: 'متوجه شدم',
      size: 'lg'
    })]
  }))
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    ...docs('Dialog', 'تأیید کارهای مهم یا برگشت‌ناپذیر. در حالت حذف، دکمهٔ حذف قرمز و دورخط است و «انصراف» دکمهٔ اصلی.')
  },
  render: () => screen(dialog({
    title: 'حذف کلید «ربات معاملاتی»',
    text: 'با حذف این API، همهٔ نرم‌افزارها و ربات‌هایی که از آن استفاده می‌کنند فوراً قطع می‌شوند. این کار برگشت‌پذیر نیست.',
    image: warning,
    primary: 'انصراف',
    secondary: 'حذف API',
    danger: true
  }))
}`,...a.parameters?.docs?.source}}};export{e as DatePicker,a as Dialog,u as Playground,r as Terms,b as __namedExportsOrder,F as default};

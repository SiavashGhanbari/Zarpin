import{a as d,o as u,p as c}from"./components-D17UtYzI.js";import{d as l}from"./figma-mXTg7bIj.js";const A={title:"Components/Option Row",render:e=>{const p=u(e);return p.style.maxInlineSize="360px",p},parameters:l("Option row","ردیف انتخاب با عنوان و توضیح؛ برای تعهدنامه، دسترسی‌ها، روش پرداخت و تنظیمات. `locked` یعنی همیشه فعال و غیرقابل‌تغییر."),args:{control:"checkbox",title:"معامله",description:"ثبت و لغو سفارش خرید و فروش طلا و نقره",meta:"",checked:!1,disabled:!1,locked:!1,error:!1},argTypes:{control:{control:"inline-radio",options:["checkbox","radio","switch"]}}},r={},s={controls:{disable:!0}},i=e=>(e.style.maxInlineSize="360px",e),n={parameters:s,render:()=>i(d([u({title:"خواندن",description:"دریافت قیمت‌ها، موجودی کیف پول و تاریخچهٔ سفارش‌ها",meta:"همیشه فعال",locked:!0}),u({title:"معامله",description:"ثبت و لغو سفارش خرید و فروش طلا و نقره"})],8))},o={parameters:s,render:()=>i(d([u({link:"شروط تعهدات و الزامات قرارداد",title:"را تایید می‌کنم.",plain:!0}),u({link:"شروط تعهدات و الزامات قرارداد",title:"را تایید می‌کنم.",plain:!0,error:!0})],8))},t={parameters:s,render:()=>i(d([u({control:"radio",name:"pay",title:"درگاه بانکی",description:"پرداخت با کارت بانکی",media:c("document"),checked:!0}),u({control:"radio",name:"pay",title:"موجودی تومانی",description:"پرداخت از کیف پول",media:c("copy")}),u({control:"radio",name:"pay",title:"واریز بانکی",description:"به‌زودی",media:c("clock"),disabled:!0})],8))},a={parameters:s,render:()=>i(u({control:"switch",title:"تمدید خودکار",description:"تمدید سپرده در سررسید",checked:!0}))},F=["Playground","Permissions","Consent","PaymentMethod","Setting"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: off,
  render: () => narrow(stack([option({
    title: 'خواندن',
    description: 'دریافت قیمت‌ها، موجودی کیف پول و تاریخچهٔ سفارش‌ها',
    meta: 'همیشه فعال',
    locked: true
  }), option({
    title: 'معامله',
    description: 'ثبت و لغو سفارش خرید و فروش طلا و نقره'
  })], 8))
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: off,
  render: () => narrow(stack([option({
    link: 'شروط تعهدات و الزامات قرارداد',
    title: 'را تایید می‌کنم.',
    plain: true
  }), option({
    link: 'شروط تعهدات و الزامات قرارداد',
    title: 'را تایید می‌کنم.',
    plain: true,
    error: true
  })], 8))
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: off,
  render: () => narrow(stack([option({
    control: 'radio',
    name: 'pay',
    title: 'درگاه بانکی',
    description: 'پرداخت با کارت بانکی',
    media: icon('document'),
    checked: true
  }), option({
    control: 'radio',
    name: 'pay',
    title: 'موجودی تومانی',
    description: 'پرداخت از کیف پول',
    media: icon('copy')
  }), option({
    control: 'radio',
    name: 'pay',
    title: 'واریز بانکی',
    description: 'به‌زودی',
    media: icon('clock'),
    disabled: true
  })], 8))
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: off,
  render: () => narrow(option({
    control: 'switch',
    title: 'تمدید خودکار',
    description: 'تمدید سپرده در سررسید',
    checked: true
  }))
}`,...a.parameters?.docs?.source}}};export{o as Consent,t as PaymentMethod,n as Permissions,r as Playground,a as Setting,F as __namedExportsOrder,A as default};

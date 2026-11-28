import{i as m,s as p,v as c,b as e,r as a}from"./components-D17UtYzI.js";import{d as b}from"./figma-mXTg7bIj.js";const d=["",...m],v={title:"Components/Button",render:e,parameters:b("Button","دکمهٔ اصلی اپ. `variant` نوع، `color` رنگ (عادی یا حذف)، `size` ارتفاع ۲۴ تا ۵۶ پیکسل."),args:{label:"خرید طلا",variant:"fill",color:"neutral",size:"xl",rounded:!1,block:!1,disabled:!1,loading:!1,leadingIcon:"",trailingIcon:""},argTypes:{label:{control:"text"},variant:{control:"inline-radio",options:c},color:{control:"inline-radio",options:["neutral","danger"]},size:{control:"inline-radio",options:p},leadingIcon:{control:"select",options:d},trailingIcon:{control:"select",options:d}}},o={},n={controls:{disable:!0}},g={fill:"پُر",tonal:"کم‌رنگ",border:"دورخط",naked:"بدون پس‌زمینه",link:"لینک"},s={parameters:n,render:()=>a(c.map(r=>e({label:g[r],variant:r,size:"lg"})))},t={parameters:n,render:()=>a(c.map(r=>e({label:"حذف کارت",variant:r,color:"danger",size:"lg"})))},l={parameters:n,render:()=>a(p.slice().reverse().map(r=>e({label:"ادامه",size:r})))},i={parameters:n,render:()=>a([e({label:"ادامه"}),e({label:"ادامه",disabled:!0}),e({label:"ادامه",loading:!0})])},u={parameters:n,render:()=>a([e({label:"افزودن کارت",leadingIcon:"add",variant:"tonal",size:"lg"}),e({label:"بعدی",trailingIcon:"arrow-left",size:"lg"})])},I=["Playground","Variants","Danger","Sizes","States","WithIcons"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: off,
  render: () => row(variants.map(variant => button({
    label: labels[variant],
    variant,
    size: 'lg'
  })))
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: off,
  render: () => row(variants.map(variant => button({
    label: 'حذف کارت',
    variant,
    color: 'danger',
    size: 'lg'
  })))
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: off,
  render: () => row(sizes.slice().reverse().map(size => button({
    label: 'ادامه',
    size
  })))
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: off,
  render: () => row([button({
    label: 'ادامه'
  }), button({
    label: 'ادامه',
    disabled: true
  }), button({
    label: 'ادامه',
    loading: true
  })])
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: off,
  render: () => row([button({
    label: 'افزودن کارت',
    leadingIcon: 'add',
    variant: 'tonal',
    size: 'lg'
  }), button({
    label: 'بعدی',
    trailingIcon: 'arrow-left',
    size: 'lg'
  })])
}`,...u.parameters?.docs?.source}}};export{t as Danger,o as Playground,l as Sizes,i as States,s as Variants,u as WithIcons,I as __namedExportsOrder,v as default};

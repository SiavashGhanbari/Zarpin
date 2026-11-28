import{s,i,j as n,r as t,v as c}from"./components-D17UtYzI.js";import{d as l}from"./figma-mXTg7bIj.js";const p={title:"Components/Icon Button",render:n,parameters:l("Icon button","دکمهٔ فقط‌آیکون. `label` برای صفحه‌خوان الزامی است."),args:{icon:"arrow-right",label:"بازگشت",variant:"tonal",color:"neutral",size:"md",rounded:!0,disabled:!1},argTypes:{icon:{control:"select",options:i},variant:{control:"inline-radio",options:c.filter(r=>r!=="link")},color:{control:"inline-radio",options:["neutral","danger"]},size:{control:"inline-radio",options:s}}},e={},o={parameters:{controls:{disable:!0}},render:()=>t(["fill","tonal","border","naked"].map(r=>n({icon:"search",label:"جست‌وجو",variant:r})))},a={parameters:{controls:{disable:!0}},render:()=>t(s.slice().reverse().map(r=>n({icon:"close",label:"بستن",size:r})))},m=["Playground","Variants","Sizes"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => row(['fill', 'tonal', 'border', 'naked'].map(variant => iconButton({
    icon: 'search',
    label: 'جست‌وجو',
    variant
  })))
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => row(sizes.slice().reverse().map(size => iconButton({
    icon: 'close',
    label: 'بستن',
    size
  })))
}`,...a.parameters?.docs?.source}}};export{e as Playground,a as Sizes,o as Variants,m as __namedExportsOrder,p as default};

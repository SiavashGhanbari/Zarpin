import{i as m,y as c,z as r,a as i,r as t,A as g}from"./components-D17UtYzI.js";import{d as p}from"./figma-mXTg7bIj.js";const b={title:"Components/Tag",render:r,parameters:p("Tag","برچسب کوتاه وضعیت یا مقدار. `removable` برای تگ‌های قابل حذف (مثل IPها)."),args:{label:"۲۳٫۵٪",color:"gold",variant:"tonal",size:"md",leadingIcon:"",trailingIcon:"",removable:!1},argTypes:{color:{control:"inline-radio",options:c},variant:{control:"inline-radio",options:["tonal","fill"]},size:{control:"inline-radio",options:["xs","sm","md","lg"]},leadingIcon:{control:"select",options:["",...m]},trailingIcon:{control:"select",options:["",...m]}}},d={neutral:"عادی",gold:"جدید",green:"موفق",red:"ناموفق",blue:"در حال بررسی"},l={controls:{disable:!0}},a={},o={parameters:l,render:()=>i([t(c.map(e=>r({label:d[e],color:e})),8),t(c.map(e=>r({label:d[e],color:e,variant:"fill"})),8)])},s={parameters:l,render:()=>t(["lg","md","sm","xs"].map(e=>r({label:"طلای ۱۸ عیار",color:"gold",size:e})),8)},n={parameters:l,render:()=>t(["185.143.232.10","91.98.12.40"].map(e=>r({label:e,removable:!0})),8)},u={parameters:{...l,...p("Divider","خط جداکننده با سه سطح شدت. برای فاصلهٔ بین بخش‌های صفحه از `.zp-section-gap` استفاده کنید.")},render:()=>i([1,2,3].map(e=>i([document.createTextNode("سطح "+e),g({level:e})],8)),16)},f=["Playground","Colors","Sizes","Removable","Divider"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: off,
  render: () => stack([row(tagColors.map(color => tag({
    label: names[color],
    color
  })), 8), row(tagColors.map(color => tag({
    label: names[color],
    color,
    variant: 'fill'
  })), 8)])
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: off,
  render: () => row(['lg', 'md', 'sm', 'xs'].map(size => tag({
    label: 'طلای ۱۸ عیار',
    color: 'gold',
    size
  })), 8)
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: off,
  render: () => row(['185.143.232.10', '91.98.12.40'].map(label => tag({
    label,
    removable: true
  })), 8)
}`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...off,
    ...docs('Divider', 'خط جداکننده با سه سطح شدت. برای فاصلهٔ بین بخش‌های صفحه از \`.zp-section-gap\` استفاده کنید.')
  },
  render: () => stack([1, 2, 3].map(level => stack([document.createTextNode('سطح ' + level), divider({
    level
  })], 8)), 16)
}`,...u.parameters?.docs?.source}}};export{o as Colors,u as Divider,a as Playground,n as Removable,s as Sizes,f as __namedExportsOrder,b as default};

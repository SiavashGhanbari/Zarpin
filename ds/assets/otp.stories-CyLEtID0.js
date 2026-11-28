import{a as n,q as e}from"./components-D17UtYzI.js";import{d as o}from"./figma-mXTg7bIj.js";const p={title:"Components/OTP Input",render:r=>{const a=e(r);return a.style.maxInlineSize="360px",a},parameters:o("OTP input","کد تأیید پیامکی. روی خانه‌ها بزنید و تایپ کنید؛ ارقام فارسی و لاتین پذیرفته می‌شوند."),args:{length:6,value:"",state:"default"},argTypes:{state:{control:"inline-radio",options:["default","error","success"]},length:{control:{type:"range",min:4,max:6}}}},t={},s={parameters:{controls:{disable:!0}},render:()=>{const r=n([e({value:""}),e({value:"482"}),e({value:"482719",state:"error"}),e({value:"482719",state:"success"})],16);return r.style.maxInlineSize="360px",r}},u=["Playground","States"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const s = stack([otp({
      value: ''
    }), otp({
      value: '482'
    }), otp({
      value: '482719',
      state: 'error'
    }), otp({
      value: '482719',
      state: 'success'
    })], 16);
    s.style.maxInlineSize = '360px';
    return s;
  }
}`,...s.parameters?.docs?.source}}};export{t as Playground,s as States,u as __namedExportsOrder,p as default};

import{a as n,c as s}from"./components-D17UtYzI.js";import{d as o}from"./figma-mXTg7bIj.js";const d={title:"Components/Copy Field",render:e=>{const t=s(e);return t.style.maxInlineSize="360px",t},parameters:o("Copy field","نمایش مقدار قابل کپی (کلید، شناسه، کد پیگیری). `secret` برای مقادیری که فقط یک بار نشان داده می‌شوند."),args:{label:"API Key",value:"zp_5a976bb32ffc7b62dea87be29e64b4e8",secret:!1,compact:!1}},r={},a={parameters:{controls:{disable:!0}},render:()=>{const e=n([s({label:"API Key",value:"zp_5a976bb32ffc7b62dea87be29e64b4e8"}),s({label:"Secret Key",value:"CicKup64UdmFHReK45sKhdDWNrPddJESgZRJXoLt2NwWKqXD",secret:!0}),s({label:"API Key",value:"zp_8b71••••••f88d",compact:!0})],12);return e.style.maxInlineSize="360px",e}},p=["Playground","Variants"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const s = stack([copyField({
      label: 'API Key',
      value: 'zp_5a976bb32ffc7b62dea87be29e64b4e8'
    }), copyField({
      label: 'Secret Key',
      value: 'CicKup64UdmFHReK45sKhdDWNrPddJESgZRJXoLt2NwWKqXD',
      secret: true
    }), copyField({
      label: 'API Key',
      value: 'zp_8b71••••••f88d',
      compact: true
    })], 12);
    s.style.maxInlineSize = '360px';
    return s;
  }
}`,...a.parameters?.docs?.source}}};export{r as Playground,a as Variants,p as __namedExportsOrder,d as default};

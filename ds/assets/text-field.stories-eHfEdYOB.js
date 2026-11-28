import{a as s,B as u,b as o}from"./components-D17UtYzI.js";import{d as i}from"./figma-mXTg7bIj.js";const F={title:"Components/Text Field",render:e=>{const a=u(e);return a.style.maxInlineSize="360px",a},parameters:i("Text field","ورودی متن با عنوان، راهنما و خطا. برای شماره، IP و کد از `dir: ltr` استفاده کنید."),args:{label:"شماره موبایل",placeholder:"۰۹۱۲۳۴۵۶۷۸۹",value:"",help:"",error:"",disabled:!1,focused:!1,dir:"ltr",inputMode:"tel",suffix:""},argTypes:{dir:{control:"inline-radio",options:["rtl","ltr"]},inputMode:{control:"select",options:["text","numeric","decimal","tel"]}}},r={},n={parameters:{controls:{disable:!0}},render:()=>{const e=s([u({label:"خالی",placeholder:"کد ملی ۱۰ رقمی",dir:"ltr"}),u({label:"فعال",value:"۰۰۱۲۳۴",focused:!0,dir:"ltr"}),u({label:"پرشده",value:"۰۰۱۲۳۴۵۶۷۸",dir:"ltr",help:"کد ملی صاحب این شماره موبایل"}),u({label:"خطا",value:"۱۲۳۴۵",dir:"ltr",error:"کد ملی باید ۱۰ رقم باشد."}),u({label:"غیرفعال",value:"طلای ۱۸ عیار",disabled:!0})],20);return e.style.maxInlineSize="360px",e}},t={parameters:{controls:{disable:!0}},render:()=>{const e=u({label:"IPهای مجاز",placeholder:"185.143.232.10",dir:"ltr",action:o({label:"افزودن",variant:"tonal",size:"lg"})});return e.style.maxInlineSize="360px",e}},l={parameters:{controls:{disable:!0}},render:()=>{const e=u({label:"مبلغ",value:"۵٬۰۰۰٬۰۰۰",suffix:"تومان",dir:"ltr",inputMode:"numeric"});return e.style.maxInlineSize="360px",e}},p=["Playground","States","WithAction","WithSuffix"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const s = stack([textField({
      label: 'خالی',
      placeholder: 'کد ملی ۱۰ رقمی',
      dir: 'ltr'
    }), textField({
      label: 'فعال',
      value: '۰۰۱۲۳۴',
      focused: true,
      dir: 'ltr'
    }), textField({
      label: 'پرشده',
      value: '۰۰۱۲۳۴۵۶۷۸',
      dir: 'ltr',
      help: 'کد ملی صاحب این شماره موبایل'
    }), textField({
      label: 'خطا',
      value: '۱۲۳۴۵',
      dir: 'ltr',
      error: 'کد ملی باید ۱۰ رقم باشد.'
    }), textField({
      label: 'غیرفعال',
      value: 'طلای ۱۸ عیار',
      disabled: true
    })], 20);
    s.style.maxInlineSize = '360px';
    return s;
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const n = textField({
      label: 'IPهای مجاز',
      placeholder: '185.143.232.10',
      dir: 'ltr',
      action: button({
        label: 'افزودن',
        variant: 'tonal',
        size: 'lg'
      })
    });
    n.style.maxInlineSize = '360px';
    return n;
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const n = textField({
      label: 'مبلغ',
      value: '۵٬۰۰۰٬۰۰۰',
      suffix: 'تومان',
      dir: 'ltr',
      inputMode: 'numeric'
    });
    n.style.maxInlineSize = '360px';
    return n;
  }
}`,...l.parameters?.docs?.source}}};export{r as Playground,n as States,t as WithAction,l as WithSuffix,p as __namedExportsOrder,F as default};

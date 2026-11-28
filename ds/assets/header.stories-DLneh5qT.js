import{a as i,h as e,b as d,j as s}from"./components-D17UtYzI.js";import{d as l}from"./figma-mXTg7bIj.js";const n={هیچ:()=>[],"یک آیکون":()=>[s({icon:"document",label:"مستندات"})],"دو آیکون":()=>[s({icon:"search",label:"جست‌وجو"}),s({icon:"document",label:"مستندات"})],"اکشن متنی":()=>[d({label:"رد شدن",variant:"link",size:"sm"})]},C={title:"Components/Header",render:({endContent:t,...o})=>{const a=e({...o,end:n[t]()});return a.style.maxInlineSize="390px",a},parameters:l("Header","عنوان سمت راست با یک دکمه قبل از آن (برگشت یا بستن). سمت چپ آزاد است: آیکون، اکشن متنی یا هیچ."),args:{title:"مدیریت API",subtitle:"",start:"back",endContent:"یک آیکون",divider:!0},argTypes:{start:{control:"inline-radio",options:["back","close","none"]},endContent:{control:"inline-radio",options:Object.keys(n)}}},u={},r={parameters:{controls:{disable:!0}},render:()=>{const t=i([e({title:"کیف پول"}),e({title:"مدیریت API",end:n["یک آیکون"]()}),e({title:"کد معرف",end:n["اکشن متنی"]()}),e({title:"کلیدهای API",start:"close"}),e({title:"انتقال داخلی",subtitle:"مرحلهٔ ۲ از ۳",end:n["دو آیکون"]()})],12);return t.style.maxInlineSize="390px",t}},p=["Playground","Variants"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const s = stack([header({
      title: 'کیف پول'
    }), header({
      title: 'مدیریت API',
      end: ends['یک آیکون']()
    }), header({
      title: 'کد معرف',
      end: ends['اکشن متنی']()
    }), header({
      title: 'کلیدهای API',
      start: 'close'
    }), header({
      title: 'انتقال داخلی',
      subtitle: 'مرحلهٔ ۲ از ۳',
      end: ends['دو آیکون']()
    })], 12);
    s.style.maxInlineSize = '390px';
    return s;
  }
}`,...r.parameters?.docs?.source}}};export{u as Playground,r as Variants,p as __namedExportsOrder,C as default};

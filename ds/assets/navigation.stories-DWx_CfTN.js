import{k as i,l as m,m as e,a as C,n as d}from"./components-D17UtYzI.js";import{d as c}from"./figma-mXTg7bIj.js";const g={title:"Components/Navigation & Lists"},r=u=>(u.style.maxInlineSize="390px",u),t={parameters:c("Bottom navigation","نوار پایین اصلی. تب فعال آیکون پُر و پس‌زمینه دارد."),args:{current:0},argTypes:{current:{control:{type:"range",min:0,max:2}}},render:u=>r(m(u))},n={parameters:c("Step progress","نوار مرحله در فلوهای چندمرحله‌ای (مثل ثبت‌نام)."),args:{count:2,current:1},render:u=>r(d(u))},a={parameters:c("List item","ردیف منو و فهرست؛ با آیکون، زیرعنوان و حالت انتخاب‌شده."),args:{title:"مدیریت API",subtitle:"",media:"document",current:!1,chevron:!0},render:u=>r(e(u))},s={parameters:{controls:{disable:!0}},render:()=>r(C([e({title:"پروفایل من",media:"eye"}),e({title:"کارت‌های بانکی",media:"copy"}),e({title:"مدیریت API",media:"document",current:!0}),e({title:"قوانین و مقررات",media:"info-circle"})],0))},o={parameters:c("Accordion","پرسش‌های متداول و محتوای بازشونده."),args:{question:"درآمد طلایی چطور کار می‌کند؟",answer:"با سپرده‌گذاری طلا، در طول دوره درآمد طلایی می‌گیرید.",open:!1},render:u=>r(i(u))},A=["BottomNavigation","StepProgress","ListItem","Menu","Accordion"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: docs('Bottom navigation', 'نوار پایین اصلی. تب فعال آیکون پُر و پس‌زمینه دارد.'),
  args: {
    current: 0
  },
  argTypes: {
    current: {
      control: {
        type: 'range',
        min: 0,
        max: 2
      }
    }
  },
  render: args => narrow(bottomNav(args))
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: docs('Step progress', 'نوار مرحله در فلوهای چندمرحله‌ای (مثل ثبت‌نام).'),
  args: {
    count: 2,
    current: 1
  },
  render: args => narrow(steps(args))
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: docs('List item', 'ردیف منو و فهرست؛ با آیکون، زیرعنوان و حالت انتخاب‌شده.'),
  args: {
    title: 'مدیریت API',
    subtitle: '',
    media: 'document',
    current: false,
    chevron: true
  },
  render: args => narrow(listItem(args))
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => narrow(stack([listItem({
    title: 'پروفایل من',
    media: 'eye'
  }), listItem({
    title: 'کارت‌های بانکی',
    media: 'copy'
  }), listItem({
    title: 'مدیریت API',
    media: 'document',
    current: true
  }), listItem({
    title: 'قوانین و مقررات',
    media: 'info-circle'
  })], 0))
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: docs('Accordion', 'پرسش‌های متداول و محتوای بازشونده.'),
  args: {
    question: 'درآمد طلایی چطور کار می‌کند؟',
    answer: 'با سپرده‌گذاری طلا، در طول دوره درآمد طلایی می‌گیرید.',
    open: false
  },
  render: args => narrow(accordion(args))
}`,...o.parameters?.docs?.source}}};export{o as Accordion,t as BottomNavigation,a as ListItem,s as Menu,n as StepProgress,A as __namedExportsOrder,g as default};

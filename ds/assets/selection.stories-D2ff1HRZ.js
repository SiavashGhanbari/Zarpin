import{a as b,r as l,u as r,w as e,x as o}from"./components-D17UtYzI.js";import{d as t}from"./figma-mXTg7bIj.js";const h={title:"Components/Selection Controls",parameters:t("Checkbox","چک‌باکس، رادیو و سوئیچ. برای ردیف کامل با عنوان از «Option Row» استفاده کنید.")},d={controls:{disable:!0}},a={args:{checked:!0,disabled:!1,error:!1},render:c=>r({...c,label:"انتخاب"})},u={parameters:{...d,...t("Radio")},render:()=>l([e({name:"r",checked:!0,label:"گزینهٔ اول"}),e({name:"r",label:"گزینهٔ دوم"}),e({name:"r2",disabled:!0,label:"غیرفعال"})])},n={parameters:t("Switch"),args:{checked:!0,disabled:!1},render:c=>o({...c,label:"تمدید خودکار"})},s={parameters:d,render:()=>b([l([r({label:"خالی"}),r({checked:!0,label:"انتخاب‌شده"}),r({checked:!0,disabled:!0,label:"قفل"}),r({error:!0,label:"خطا"})]),l([e({name:"a",label:"خالی"}),e({name:"b",checked:!0,label:"انتخاب‌شده"}),e({name:"c",disabled:!0,label:"غیرفعال"})]),l([o({label:"خاموش"}),o({checked:!0,label:"روشن"}),o({disabled:!0,label:"غیرفعال"})])],20)},p=["Checkbox","Radio","Switch","AllStates"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    error: false
  },
  render: args => checkbox({
    ...args,
    label: 'انتخاب'
  })
}`,...a.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...off,
    ...docs('Radio')
  },
  render: () => row([radio({
    name: 'r',
    checked: true,
    label: 'گزینهٔ اول'
  }), radio({
    name: 'r',
    label: 'گزینهٔ دوم'
  }), radio({
    name: 'r2',
    disabled: true,
    label: 'غیرفعال'
  })])
}`,...u.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: docs('Switch'),
  args: {
    checked: true,
    disabled: false
  },
  render: args => switchControl({
    ...args,
    label: 'تمدید خودکار'
  })
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: off,
  render: () => stack([row([checkbox({
    label: 'خالی'
  }), checkbox({
    checked: true,
    label: 'انتخاب‌شده'
  }), checkbox({
    checked: true,
    disabled: true,
    label: 'قفل'
  }), checkbox({
    error: true,
    label: 'خطا'
  })]), row([radio({
    name: 'a',
    label: 'خالی'
  }), radio({
    name: 'b',
    checked: true,
    label: 'انتخاب‌شده'
  }), radio({
    name: 'c',
    disabled: true,
    label: 'غیرفعال'
  })]), row([switchControl({
    label: 'خاموش'
  }), switchControl({
    checked: true,
    label: 'روشن'
  }), switchControl({
    disabled: true,
    label: 'غیرفعال'
  })])], 20)
}`,...s.parameters?.docs?.source}}};export{s as AllStates,a as Checkbox,u as Radio,n as Switch,p as __namedExportsOrder,h as default};

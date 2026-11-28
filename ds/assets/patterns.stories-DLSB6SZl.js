import{F as u,j as y,z as C,c as A,a as l,f as k,b as a,B as F,o as v,h,n as z,G as f,p as w}from"./components-D17UtYzI.js";const S=""+new URL("stake-Bwpmyga2.png",import.meta.url).href,T={title:"Patterns",parameters:{controls:{disable:!0},docs:{description:{component:"ترکیب کامپوننت‌ها در بخش‌های تکرارشوندهٔ اپ. فلوهای کامل در پروتوتایپ هستند، نه اینجا."}}}},s=e=>u("div","sb-phone",e),o={render:()=>{const e=u("h2","t-heading-medium-bold",["درآمدت رو ",u("span","","طلایی")," کن!"]);e.style.cssText="margin:0;text-align:center",e.querySelector("span").style.color="var(--accent-500)";const t=Object.assign(u("img"),{src:S,alt:""});t.style.cssText="display:block;inline-size:120px;margin:0 auto 12px";const n=(m,g,x)=>{const b=u("div","zp-row",[u("span","",w(m,28)),u("div","zp-stack",[u("b","t-title-medium-bold",g),u("span","t-body-medium",x)])]);return b.style.cssText="gap:16px;align-items:flex-start;flex-wrap:nowrap",b.firstChild.style.color="var(--accent-500)",b},r=u("p","t-body-medium","طلایتان را سپرده بگذارید و بدون فروش آن، درآمد طلایی بگیرید.");return r.style.cssText="margin:0;text-align:center;color:var(--content-secondary)",s(l([t,e,r,n("tick-circle","سپردهٔ طلا","حجم و مدت سپرده را خودتان انتخاب کنید."),n("clock","درآمد طلایی","درآمد را به موجودی طلای خود اضافه کنید."),a({label:"سپرده جدید",block:!0})],20))}},c={render:()=>s(l([h({title:"کد معرف",end:[a({label:"رد شدن",variant:"link",size:"sm"})],divider:!1}),z({count:2,current:1}),u("h2","t-heading-small-bold","کد معرف دارید؟"),F({label:"کد معرف (اختیاری)",placeholder:"کد معرف را وارد کنید",dir:"ltr"}),a({label:"ادامه",block:!0})],16))},i={render:()=>s(l([F({label:"کد ملی",value:"۰۰۱۲۳۴۵۶۷۸",dir:"ltr",inputMode:"numeric"}),F({label:"تاریخ تولد",value:"۱۳۷۴/۰۷/۱۵",dir:"ltr"}),v({link:"شروط تعهدات و الزامات قرارداد",title:"را تایید می‌کنم.",plain:!0,checked:!0}),a({label:"تایید و احراز",block:!0}),a({label:"بعداً احراز می‌کنم",variant:"naked",block:!0})],12))},d={render:()=>{const e=u("div","zp-row",[u("div","zp-stack",[u("b","t-label-large-bold","ربات معاملاتی"),u("span","t-caption-large","دسترسی خواندن و معامله")]),y({icon:"trash",label:"حذف",variant:"naked",size:"sm"})]);e.style.cssText="justify-content:space-between;flex-wrap:nowrap",e.querySelector(".t-caption-large").style.color="var(--content-tertiary)";const t=u("div","zp-row",["185.143.232.10","185.143.232.0/24","91.98.12.40"].map(r=>C({label:r,size:"sm"})).concat(C({label:"۴ مورد دیگر",color:"blue",size:"sm"})));t.style.gap="6px";const n=u("article","zp-stack",[e,A({label:"API Key",value:"zp_8b71••••••f88d",compact:!0}),u("span","t-caption-large","IPهای مجاز (۷)"),t]);return n.style.cssText="gap:12px;padding:14px;border-radius:16px;box-shadow:inset 0 0 0 1px var(--border-subtle)",s(l([k({text:"هر کلید فقط از IPهای مجاز خودش کار می‌کند. حداکثر ۳ API فعال می‌توانید داشته باشید.",link:"مستندات"}),n],12))}},p={render:()=>{const e=F({label:"مبلغ",placeholder:"مثلاً ۱۰٬۰۰۰٬۰۰۰",suffix:"تومان",dir:"ltr",inputMode:"numeric"}),t=e.querySelector("input"),n=a({label:"ادامه",block:!0,disabled:!0});return t.addEventListener("input",()=>{const r=f(t.value);n.disabled=!/^\d+$/.test(r)||Number(r)<=0}),s(l([C({label:"طلای ۱۸ عیار",color:"gold"}),e,n],16))}},I=["FeatureIntro","SignupStep","KycForm","ApiKeyCard","TradeForm"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const title = el('h2', 't-heading-medium-bold', ['درآمدت رو ', el('span', '', 'طلایی'), ' کن!']);
    title.style.cssText = 'margin:0;text-align:center';
    title.querySelector('span').style.color = 'var(--accent-500)';
    const img = Object.assign(el('img'), {
      src: stake,
      alt: ''
    });
    img.style.cssText = 'display:block;inline-size:120px;margin:0 auto 12px';
    const item = (glyph, head, text) => {
      const r = el('div', 'zp-row', [el('span', '', icon(glyph, 28)), el('div', 'zp-stack', [el('b', 't-title-medium-bold', head), el('span', 't-body-medium', text)])]);
      r.style.cssText = 'gap:16px;align-items:flex-start;flex-wrap:nowrap';
      r.firstChild.style.color = 'var(--accent-500)';
      return r;
    };
    const sub = el('p', 't-body-medium', 'طلایتان را سپرده بگذارید و بدون فروش آن، درآمد طلایی بگیرید.');
    sub.style.cssText = 'margin:0;text-align:center;color:var(--content-secondary)';
    return phone(stack([img, title, sub, item('tick-circle', 'سپردهٔ طلا', 'حجم و مدت سپرده را خودتان انتخاب کنید.'), item('clock', 'درآمد طلایی', 'درآمد را به موجودی طلای خود اضافه کنید.'), button({
      label: 'سپرده جدید',
      block: true
    })], 20));
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => phone(stack([header({
    title: 'کد معرف',
    end: [button({
      label: 'رد شدن',
      variant: 'link',
      size: 'sm'
    })],
    divider: false
  }), steps({
    count: 2,
    current: 1
  }), el('h2', 't-heading-small-bold', 'کد معرف دارید؟'), textField({
    label: 'کد معرف (اختیاری)',
    placeholder: 'کد معرف را وارد کنید',
    dir: 'ltr'
  }), button({
    label: 'ادامه',
    block: true
  })], 16))
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => phone(stack([textField({
    label: 'کد ملی',
    value: '۰۰۱۲۳۴۵۶۷۸',
    dir: 'ltr',
    inputMode: 'numeric'
  }), textField({
    label: 'تاریخ تولد',
    value: '۱۳۷۴/۰۷/۱۵',
    dir: 'ltr'
  }), option({
    link: 'شروط تعهدات و الزامات قرارداد',
    title: 'را تایید می‌کنم.',
    plain: true,
    checked: true
  }), button({
    label: 'تایید و احراز',
    block: true
  }), button({
    label: 'بعداً احراز می‌کنم',
    variant: 'naked',
    block: true
  })], 12))
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const head = el('div', 'zp-row', [el('div', 'zp-stack', [el('b', 't-label-large-bold', 'ربات معاملاتی'), el('span', 't-caption-large', 'دسترسی خواندن و معامله')]), iconButton({
      icon: 'trash',
      label: 'حذف',
      variant: 'naked',
      size: 'sm'
    })]);
    head.style.cssText = 'justify-content:space-between;flex-wrap:nowrap';
    head.querySelector('.t-caption-large').style.color = 'var(--content-tertiary)';
    const ips = el('div', 'zp-row', ['185.143.232.10', '185.143.232.0/24', '91.98.12.40'].map(label => tag({
      label,
      size: 'sm'
    })).concat(tag({
      label: '۴ مورد دیگر',
      color: 'blue',
      size: 'sm'
    })));
    ips.style.gap = '6px';
    const card = el('article', 'zp-stack', [head, copyField({
      label: 'API Key',
      value: 'zp_8b71••••••f88d',
      compact: true
    }), el('span', 't-caption-large', 'IPهای مجاز (۷)'), ips]);
    card.style.cssText = 'gap:12px;padding:14px;border-radius:16px;box-shadow:inset 0 0 0 1px var(--border-subtle)';
    return phone(stack([banner({
      text: 'هر کلید فقط از IPهای مجاز خودش کار می‌کند. حداکثر ۳ API فعال می‌توانید داشته باشید.',
      link: 'مستندات'
    }), card], 12));
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const field = textField({
      label: 'مبلغ',
      placeholder: 'مثلاً ۱۰٬۰۰۰٬۰۰۰',
      suffix: 'تومان',
      dir: 'ltr',
      inputMode: 'numeric'
    });
    const input = field.querySelector('input');
    const next = button({
      label: 'ادامه',
      block: true,
      disabled: true
    });
    input.addEventListener('input', () => {
      const v = normalizeDigits(input.value);
      next.disabled = !/^\\d+$/.test(v) || Number(v) <= 0;
    });
    return phone(stack([tag({
      label: 'طلای ۱۸ عیار',
      color: 'gold'
    }), field, next], 16));
  }
}`,...p.parameters?.docs?.source}}};export{d as ApiKeyCard,o as FeatureIntro,i as KycForm,c as SignupStep,p as TradeForm,I as __namedExportsOrder,T as default};

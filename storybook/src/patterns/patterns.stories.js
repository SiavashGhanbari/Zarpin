import { banner, button, copyField, el, header, icon, iconButton, normalizeDigits, option, stack, steps, tag, textField } from '../ds/components.js';
import stake from '../ds/images/stake.png?url';

export default { title: 'Patterns', parameters: { controls: { disable: true }, docs: { description: { component: 'ترکیب کامپوننت‌ها در بخش‌های تکرارشوندهٔ اپ. فلوهای کامل در پروتوتایپ هستند، نه اینجا.' } } } };
const phone = children => { const n = el('div', 'sb-phone', children); return n; };

export const FeatureIntro = {
  render: () => {
    const title = el('h2', 't-heading-medium-bold', ['درآمدت رو ', el('span', '', 'طلایی'), ' کن!']);
    title.style.cssText = 'margin:0;text-align:center'; title.querySelector('span').style.color = 'var(--accent-500)';
    const img = Object.assign(el('img'), { src: stake, alt: '' }); img.style.cssText = 'display:block;inline-size:120px;margin:0 auto 12px';
    const item = (glyph, head, text) => { const r = el('div', 'zp-row', [el('span', '', icon(glyph, 28)), el('div', 'zp-stack', [el('b', 't-title-medium-bold', head), el('span', 't-body-medium', text)])]); r.style.cssText = 'gap:16px;align-items:flex-start;flex-wrap:nowrap'; r.firstChild.style.color = 'var(--accent-500)'; return r; };
    const sub = el('p', 't-body-medium', 'طلایتان را سپرده بگذارید و بدون فروش آن، درآمد طلایی بگیرید.'); sub.style.cssText = 'margin:0;text-align:center;color:var(--content-secondary)';
    return phone(stack([img, title, sub, item('tick-circle', 'سپردهٔ طلا', 'حجم و مدت سپرده را خودتان انتخاب کنید.'), item('clock', 'درآمد طلایی', 'درآمد را به موجودی طلای خود اضافه کنید.'), button({ label: 'سپرده جدید', block: true })], 20));
  },
};

export const SignupStep = {
  render: () => phone(stack([
    header({ title: 'کد معرف', end: [button({ label: 'رد شدن', variant: 'link', size: 'sm' })], divider: false }),
    steps({ count: 2, current: 1 }),
    el('h2', 't-heading-small-bold', 'کد معرف دارید؟'),
    textField({ label: 'کد معرف (اختیاری)', placeholder: 'کد معرف را وارد کنید', dir: 'ltr' }),
    button({ label: 'ادامه', block: true }),
  ], 16)),
};

export const KycForm = {
  render: () => phone(stack([
    textField({ label: 'کد ملی', value: '۰۰۱۲۳۴۵۶۷۸', dir: 'ltr', inputMode: 'numeric' }),
    textField({ label: 'تاریخ تولد', value: '۱۳۷۴/۰۷/۱۵', dir: 'ltr' }),
    option({ link: 'شروط تعهدات و الزامات قرارداد', title: 'را تایید می‌کنم.', plain: true, checked: true }),
    button({ label: 'تایید و احراز', block: true }),
    button({ label: 'بعداً احراز می‌کنم', variant: 'naked', block: true }),
  ], 12)),
};

export const ApiKeyCard = {
  render: () => {
    const head = el('div', 'zp-row', [el('div', 'zp-stack', [el('b', 't-label-large-bold', 'ربات معاملاتی'), el('span', 't-caption-large', 'دسترسی خواندن و معامله')]), iconButton({ icon: 'trash', label: 'حذف', variant: 'naked', size: 'sm' })]);
    head.style.cssText = 'justify-content:space-between;flex-wrap:nowrap';
    head.querySelector('.t-caption-large').style.color = 'var(--content-tertiary)';
    const ips = el('div', 'zp-row', ['185.143.232.10', '185.143.232.0/24', '91.98.12.40'].map(label => tag({ label, size: 'sm' })).concat(tag({ label: '۴ مورد دیگر', color: 'blue', size: 'sm' })));
    ips.style.gap = '6px';
    const card = el('article', 'zp-stack', [head, copyField({ label: 'API Key', value: 'zp_8b71••••••f88d', compact: true }), el('span', 't-caption-large', 'IPهای مجاز (۷)'), ips]);
    card.style.cssText = 'gap:12px;padding:14px;border-radius:16px;box-shadow:inset 0 0 0 1px var(--border-subtle)';
    return phone(stack([banner({ text: 'هر کلید فقط از IPهای مجاز خودش کار می‌کند. حداکثر ۳ API فعال می‌توانید داشته باشید.', link: 'مستندات' }), card], 12));
  },
};

export const TradeForm = {
  render: () => {
    const field = textField({ label: 'مبلغ', placeholder: 'مثلاً ۱۰٬۰۰۰٬۰۰۰', suffix: 'تومان', dir: 'ltr', inputMode: 'numeric' });
    const input = field.querySelector('input');
    const next = button({ label: 'ادامه', block: true, disabled: true });
    input.addEventListener('input', () => { const v = normalizeDigits(input.value); next.disabled = !/^\d+$/.test(v) || Number(v) <= 0; });
    return phone(stack([tag({ label: 'طلای ۱۸ عیار', color: 'gold' }), field, next], 16));
  },
};

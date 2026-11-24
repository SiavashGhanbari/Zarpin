import { accordion, bottomNav, listItem, stack, steps } from '../ds/components.js';
import { docs } from '../ds/figma.js';

export default { title: 'Components/Navigation & Lists' };
const narrow = n => { n.style.maxInlineSize = '390px'; return n; };
export const BottomNavigation = {
  parameters: docs('Bottom navigation', 'نوار پایین اصلی. تب فعال آیکون پُر و پس‌زمینه دارد.'),
  args: { current: 0 }, argTypes: { current: { control: { type: 'range', min: 0, max: 2 } } },
  render: args => narrow(bottomNav(args)),
};
export const StepProgress = {
  parameters: docs('Step progress', 'نوار مرحله در فلوهای چندمرحله‌ای (مثل ثبت‌نام).'),
  args: { count: 2, current: 1 },
  render: args => narrow(steps(args)),
};
export const ListItem = {
  parameters: docs('List item', 'ردیف منو و فهرست؛ با آیکون، زیرعنوان و حالت انتخاب‌شده.'),
  args: { title: 'مدیریت API', subtitle: '', media: 'document', current: false, chevron: true },
  render: args => narrow(listItem(args)),
};
export const Menu = {
  parameters: { controls: { disable: true } },
  render: () => narrow(stack([listItem({ title: 'پروفایل من', media: 'eye' }), listItem({ title: 'کارت‌های بانکی', media: 'copy' }), listItem({ title: 'مدیریت API', media: 'document', current: true }), listItem({ title: 'قوانین و مقررات', media: 'info-circle' })], 0)),
};
export const Accordion = {
  parameters: docs('Accordion', 'پرسش‌های متداول و محتوای بازشونده.'),
  args: { question: 'درآمد طلایی چطور کار می‌کند؟', answer: 'با سپرده‌گذاری طلا، در طول دوره درآمد طلایی می‌گیرید.', open: false },
  render: args => narrow(accordion(args)),
};

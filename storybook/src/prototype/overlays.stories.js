import { button, element } from '../components.js';
import assets from '../generated/prototype-assets.json';
import { glyph, stage, uniqueId } from './preview.js';

export default {
  title: 'Patterns/Overlays',
  parameters: { docs: { description: { component: 'برگهٔ پایین و پرسش‌های متداول با چیدمان فعلی پروتوتایپ.' } } },
};

export const BottomSheet = {
  args: { tall: false },
  argTypes: { tall: { control: 'boolean' } },
  render: ({ tall }) => {
    const preview = stage();
    const trigger = button({ label: 'نمایش جزئیات سفارش' });
    const dialog = element('dialog', 'modal');
    const panel = element('section', tall ? 'modal-sheet tall' : 'modal-sheet');
    const scrim = element('div', 'modal-backdrop');
    scrim.setAttribute('aria-hidden', 'true');
    const title = element('h2', 'sheet-header', 'جزئیات سفارش');
    title.id = uniqueId('sheet');
    dialog.setAttribute('aria-labelledby', title.id);
    const footer = element('div', 'sheet-footer');
    const close = button({ label: 'بستن' });
    close.onclick = () => dialog.close();
    scrim.onclick = () => dialog.close();
    dialog.onclose = () => dialog.classList.remove('open');
    footer.append(close);
    panel.append(title, element('p', 'zp-prototype-sheet-body', 'طلای ۱۸ عیار، ۰٫۵۰۰ گرم'), footer);
    dialog.append(scrim, panel);
    trigger.onclick = () => {
      dialog.showModal();
      dialog.classList.add('open');
      close.focus();
    };
    preview.append(trigger, dialog);
    return preview;
  },
};

export const Faq = {
  render: () => {
    const preview = stage();
    const list = element('div', 'faq-list');
    for (const [question, answer] of [
      ['درآمد طلایی چطور کار می‌کند؟', 'با سپرده‌گذاری طلا، در طول دوره درآمد طلایی می‌گیرید.'],
      ['تمدید خودکار چیست؟', 'در سررسید، سپرده با شرایط جدید تمدید می‌شود.'],
    ]) {
      const item = element('div', 'faq-item');
      const trigger = element('button', 'faq-q');
      trigger.type = 'button';
      trigger.append(element('span', '', question), glyph(assets.faqChevron));
      const content = element('div', 'faq-a');
      content.id = uniqueId('faq');
      content.append(element('p', '', answer));
      trigger.setAttribute('aria-controls', content.id);
      const update = open => {
        trigger.setAttribute('aria-expanded', String(open));
        item.classList.toggle('on', open);
        content.setAttribute('aria-hidden', String(!open));
      };
      trigger.onclick = () => update(!item.classList.contains('on'));
      update(false);
      item.append(trigger, content);
      list.append(item);
    }
    preview.append(list);
    return preview;
  },
};

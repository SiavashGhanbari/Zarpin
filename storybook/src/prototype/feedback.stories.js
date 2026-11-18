import { button, element } from '../components.js';
import assets from '../generated/prototype-assets.json';
import { glyph, stage, uniqueId } from './preview.js';

export default {
  title: 'Patterns/Feedback',
  parameters: { docs: { description: { component: 'Toast موقت، پیام داخل صفحه و راهنمای کوتاه کنار مقادیر در پروتوتایپ.' } } },
};

export const Toast = {
  args: { message: 'کد پیگیری کپی شد' },
  argTypes: { message: { control: 'text' } },
  render: ({ message }) => {
    const preview = stage('zp-prototype-toast');
    const toast = element('div', 'toast');
    toast.setAttribute('role', 'status');
    const trigger = button({ label: 'نمایش پیام' });
    let timeout;
    trigger.onclick = () => {
      toast.replaceChildren(glyph(assets.successIcon), element('span', '', message));
      toast.classList.add('show');
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        toast.classList.remove('show');
        toast.replaceChildren();
      }, 2600);
    };
    preview.append(toast, trigger);
    return preview;
  },
};

export const Snackbar = {
  args: { tone: 'success' },
  argTypes: { tone: { control: 'select', options: ['success', 'warning'] } },
  render: ({ tone }) => {
    const preview = stage();
    const success = tone === 'success';
    const message = element('div', success ? 'snack ok' : 'snack warn');
    message.setAttribute('role', 'status');
    if (success) message.append(glyph(assets.successIcon));
    message.append(element('span', '', success ? 'احراز هویت با موفقیت انجام شد.' : 'موجودی برای ادامه کافی نیست.'));
    preview.append(message);
    return preview;
  },
};

export const Tooltip = {
  args: { text: 'اگر ارزش وثیقه به این مبلغ برسد، وام در حد هشدار است.' },
  argTypes: { text: { control: 'text' } },
  render: ({ text }) => {
    const preview = stage('zp-prototype-tooltip');
    const trigger = element('button', 'tip-k', 'حد هشدار');
    trigger.type = 'button';
    const indicator = element('span', 'tip-ic zp-prototype-info', 'i');
    indicator.setAttribute('aria-hidden', 'true');
    trigger.append(indicator);
    const bubble = element('div', 'tip below');
    bubble.id = uniqueId('tooltip');
    bubble.setAttribute('role', 'tooltip');
    bubble.append(element('span', '', text), element('i', 'tip-ar'));
    const update = open => {
      bubble.hidden = !open;
      bubble.classList.toggle('on', open);
      if (open) trigger.setAttribute('aria-describedby', bubble.id);
      else trigger.removeAttribute('aria-describedby');
    };
    trigger.onclick = () => update(bubble.hidden);
    trigger.onblur = () => update(false);
    trigger.onkeydown = event => {
      if (event.key === 'Escape') update(false);
    };
    update(false);
    preview.append(trigger, bubble);
    return preview;
  },
};

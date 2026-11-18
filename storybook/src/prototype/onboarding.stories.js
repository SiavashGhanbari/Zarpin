import { button, element, normalizeDigits } from '../components.js';
import assets from '../generated/prototype-assets.json';
import { glyph, stage, uniqueId } from './preview.js';

export default {
  title: 'Patterns/Onboarding',
  parameters: { docs: { description: { component: 'معرفی قابلیت در حالت خالی و ورودی شش‌رقمی کد تأیید.' } } },
};

export const EmptyState = {
  render: () => {
    const preview = stage('zp-prototype-empty');
    const intro = element('section', 'dp-emptyst');
    const illustration = element('img', 'in-img');
    illustration.src = assets.stakeIllustration;
    illustration.alt = '';
    const title = element('h2', 'in-title', 'درآمدت رو ');
    title.append(element('span', '', 'طلایی'), document.createTextNode(' کن!'));
    const detail = element('p', 'in-sub', 'طلایتان را سپرده بگذارید و بدون فروش آن، درآمد طلایی بگیرید.');
    const benefits = element('ul', 'in-list');
    for (const [heading, copy] of [
      ['سپردهٔ طلا', 'حجم و مدت سپرده را خودتان انتخاب کنید.'],
      ['درآمد طلایی', 'درآمد را به موجودی طلای خود اضافه کنید.'],
    ]) {
      const benefit = element('li', '');
      const icon = element('span', 'in-ic');
      icon.append(glyph(assets.successIcon));
      const text = element('div', '');
      text.append(element('b', '', heading), element('p', '', copy));
      benefit.append(icon, text);
      benefits.append(benefit);
    }
    const action = button({ label: 'سپرده جدید' });
    action.classList.add('dp-empty-btn');
    const status = element('p', 'zp-prototype-detail');
    status.setAttribute('role', 'status');
    action.onclick = () => { status.textContent = 'انتخاب طرح سپرده'; };
    intro.append(illustration, title, detail, benefits, action, status);
    preview.append(intro);
    return preview;
  },
};

export const VerificationCode = {
  args: { value: '' },
  argTypes: { value: { control: 'text' } },
  render: ({ value }) => {
    const preview = stage();
    const field = element('div', 'otp');
    const cells = element('div', 'otp-boxes');
    cells.setAttribute('aria-hidden', 'true');
    const input = element('input', '');
    input.type = 'text';
    input.id = uniqueId('otp');
    input.inputMode = 'numeric';
    input.autocomplete = 'one-time-code';
    input.maxLength = 6;
    input.value = value;
    const label = element('label', 'zp-field-label', 'کد تأیید');
    label.htmlFor = input.id;
    const status = element('p', 'zp-prototype-detail');
    status.id = uniqueId('otp-status');
    status.setAttribute('role', 'status');
    input.setAttribute('aria-describedby', status.id);
    const digits = Array.from({ length: 6 }, () => {
      const cell = element('span', 'otp-box');
      cell.append(element('span', 'v'), element('span', 'caret'));
      cells.append(cell);
      return cell;
    });
    function update() {
      const code = normalizeDigits(input.value).replace(/\D/g, '').slice(0, 6);
      input.value = code;
      const valid = code === '123456';
      const invalid = code.length === 6 && !valid;
      field.classList.toggle('success', valid);
      field.classList.toggle('error', invalid);
      input.setAttribute('aria-invalid', String(invalid));
      status.textContent = valid ? 'کد تأیید شد.' : invalid ? 'کد واردشده درست نیست.' : 'کد نمونه ۱۲۳۴۵۶ است.';
      digits.forEach((cell, index) => {
        cell.firstElementChild.textContent = code[index] ? '۰۱۲۳۴۵۶۷۸۹'[Number(code[index])] : '';
        cell.classList.toggle('filled', index < code.length);
        cell.classList.toggle('active', index === code.length);
      });
    }
    input.addEventListener('input', update);
    input.addEventListener('focus', () => field.classList.add('focused'));
    input.addEventListener('blur', () => field.classList.remove('focused'));
    update();
    field.append(cells, input);
    preview.append(label, field, status);
    return preview;
  },
};

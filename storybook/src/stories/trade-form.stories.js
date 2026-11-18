import { button, input, normalizeDigits, tag } from '../components.js';

export default {
  title: 'Patterns/Trade Form',
  parameters: {
    controls: { disable: true },
    docs: { description: { component: 'فرم نمونه برای کنار هم دیدن ورودی، تگ و دکمه با دادهٔ آزمایشی.' } },
  },
};

export const Preview = {
  render: () => {
    const form = document.createElement('form');
    form.className = 'zp-trade-form';
    const amountField = input({ label: 'مبلغ به تومان', placeholder: 'مثلاً ۱۰۰۰۰۰', inputMode: 'numeric' });
    const amount = amountField.querySelector('input');
    const next = button({ label: 'دیدن خلاصه', type: 'submit', disabled: true });
    const status = document.createElement('p');
    status.className = 'zp-form-status';
    status.setAttribute('role', 'status');
    status.hidden = true;

    amount.addEventListener('input', () => {
      const value = normalizeDigits(amount.value);
      next.disabled = !/^\d+$/.test(value) || !Number.isSafeInteger(Number(value)) || Number(value) <= 0;
      status.hidden = true;
    });
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (next.disabled) return;
      status.textContent = 'مبلغ نمونه: ' + Number(normalizeDigits(amount.value)).toLocaleString('fa-IR') + ' تومان';
      status.hidden = false;
    });
    form.append(tag({ label: 'طلای ۱۸ عیار' }), amountField, next, status);
    return form;
  },
};

export const InvalidAmount = {
  render: () => {
    const layout = document.createElement('div');
    layout.className = 'zp-trade-form';
    layout.append(
      tag({ label: 'طلای ۱۸ عیار' }),
      input({ label: 'مبلغ به تومان', value: '۰', error: 'مبلغ باید بیشتر از صفر باشد.', inputMode: 'numeric' }),
      button({ label: 'دیدن خلاصه', disabled: true }),
    );
    return layout;
  },
};

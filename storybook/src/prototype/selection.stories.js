import { element, icon } from '../components.js';
import { stage, uniqueId } from './preview.js';

export default {
  title: 'Patterns/Selection',
  parameters: { docs: { description: { component: 'کارت رضایت، گزینهٔ پرداخت، سوئیچ تمدید و جداکنندهٔ بخش‌ها در پروتوتایپ.' } } },
};

export const Consent = {
  args: { checked: false, error: false },
  argTypes: { checked: { control: 'boolean' }, error: { control: 'boolean' } },
  render: ({ checked, error }) => {
    const preview = stage();
    const label = element('label', 'agree');
    const control = element('input', 'zp-prototype-choice-input');
    control.type = 'checkbox';
    control.checked = checked;
    const mark = element('span', 'box');
    mark.setAttribute('aria-hidden', 'true');
    mark.append(element('span', 'zp-prototype-check', '✓'));
    function update() {
      const invalid = error && !control.checked;
      label.classList.toggle('on', control.checked);
      label.classList.toggle('error', invalid);
      control.setAttribute('aria-invalid', String(invalid));
    }
    control.addEventListener('change', update);
    update();
    label.append(control, mark, element('span', '', 'با شرایط و مقررات موافقم.'));
    preview.append(label);
    return preview;
  },
};

export const PaymentMethod = {
  render: () => {
    const preview = stage();
    const group = element('fieldset', 'zp-prototype-payments');
    group.append(element('legend', 'zp-prototype-legend', 'روش پرداخت'));
    const name = uniqueId('payment');
    const radios = [
      ['درگاه بانکی', 'پرداخت با کارت بانکی', false],
      ['موجودی تومان', 'پرداخت از کیف پول', false],
      ['واریز بانکی', 'به‌زودی', true],
    ].map(([title, subtitle, disabled], index) => {
      const label = element('label', 'pay-opt');
      const radio = element('input', 'zp-prototype-choice-input');
      radio.type = 'radio';
      radio.name = name;
      radio.checked = index === 0;
      radio.disabled = disabled;
      const art = element('span', 'pay-ic');
      art.append(icon('arrow-right'));
      const content = element('span', 'pay-t');
      content.append(element('b', '', title), element('small', '', subtitle));
      const indicator = element('span', 'pay-radio');
      indicator.setAttribute('aria-hidden', 'true');
      label.append(radio, art, content, indicator);
      group.append(label);
      return { label, radio };
    });
    const update = () => radios.forEach(({ label, radio }) => label.classList.toggle('on', radio.checked));
    group.addEventListener('change', update);
    update();
    preview.append(group);
    return preview;
  },
};

export const AutoRenewSwitch = {
  args: { checked: false, disabled: false },
  argTypes: { checked: { control: 'boolean' }, disabled: { control: 'boolean' } },
  render: ({ checked, disabled }) => {
    const preview = stage();
    const control = element('button', 'sw-card');
    control.type = 'button';
    control.disabled = disabled;
    control.setAttribute('role', 'switch');
    control.setAttribute('aria-label', 'تمدید خودکار');
    const text = element('span', 'sw-t');
    text.append(element('b', '', 'تمدید خودکار'), element('small', '', 'تمدید سپرده در سررسید'));
    const track = element('span', 'sw');
    track.setAttribute('aria-hidden', 'true');
    const thumb = element('i', '');
    thumb.append(element('b', ''), element('b', ''), element('b', ''));
    track.append(thumb);
    const update = () => {
      control.classList.toggle('on', checked);
      control.setAttribute('aria-checked', String(checked));
    };
    control.onclick = () => { checked = !checked; update(); };
    update();
    control.append(text, track);
    preview.append(control);
    return preview;
  },
};

export const Divider = {
  render: () => {
    const preview = stage('zp-prototype-divider');
    const divider = element('div', 'sec-div');
    divider.setAttribute('role', 'separator');
    preview.append(
      element('p', '', 'جزئیات سفارش'),
      divider,
      element('p', '', 'روش پرداخت'),
    );
    return preview;
  },
};

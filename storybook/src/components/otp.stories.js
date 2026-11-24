import { otp, stack } from '../ds/components.js';
import { docs } from '../ds/figma.js';

export default {
  title: 'Components/OTP Input',
  render: args => { const n = otp(args); n.style.maxInlineSize = '360px'; return n; },
  parameters: docs('OTP input', 'کد تأیید پیامکی. روی خانه‌ها بزنید و تایپ کنید؛ ارقام فارسی و لاتین پذیرفته می‌شوند.'),
  args: { length: 6, value: '', state: 'default' },
  argTypes: { state: { control: 'inline-radio', options: ['default', 'error', 'success'] }, length: { control: { type: 'range', min: 4, max: 6 } } },
};
export const Playground = {};
export const States = {
  parameters: { controls: { disable: true } },
  render: () => { const s = stack([otp({ value: '' }), otp({ value: '482' }), otp({ value: '482719', state: 'error' }), otp({ value: '482719', state: 'success' })], 16); s.style.maxInlineSize = '360px'; return s; },
};

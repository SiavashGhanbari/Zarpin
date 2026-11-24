import { copyField, stack } from '../ds/components.js';
import { docs } from '../ds/figma.js';

export default {
  title: 'Components/Copy Field',
  render: args => { const n = copyField(args); n.style.maxInlineSize = '360px'; return n; },
  parameters: docs('Copy field', 'نمایش مقدار قابل کپی (کلید، شناسه، کد پیگیری). `secret` برای مقادیری که فقط یک بار نشان داده می‌شوند.'),
  args: { label: 'API Key', value: 'zp_5a976bb32ffc7b62dea87be29e64b4e8', secret: false, compact: false },
};
export const Playground = {};
export const Variants = {
  parameters: { controls: { disable: true } },
  render: () => { const s = stack([copyField({ label: 'API Key', value: 'zp_5a976bb32ffc7b62dea87be29e64b4e8' }), copyField({ label: 'Secret Key', value: 'CicKup64UdmFHReK45sKhdDWNrPddJESgZRJXoLt2NwWKqXD', secret: true }), copyField({ label: 'API Key', value: 'zp_8b71••••••f88d', compact: true })], 12); s.style.maxInlineSize = '360px'; return s; },
};

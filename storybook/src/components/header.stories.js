import { button, header, iconButton, stack } from '../ds/components.js';
import { docs } from '../ds/figma.js';

const ends = {
  'هیچ': () => [],
  'یک آیکون': () => [iconButton({ icon: 'document', label: 'مستندات' })],
  'دو آیکون': () => [iconButton({ icon: 'search', label: 'جست‌وجو' }), iconButton({ icon: 'document', label: 'مستندات' })],
  'اکشن متنی': () => [button({ label: 'رد شدن', variant: 'link', size: 'sm' })],
};

export default {
  title: 'Components/Header',
  render: ({ endContent, ...args }) => { const n = header({ ...args, end: ends[endContent]() }); n.style.maxInlineSize = '390px'; return n; },
  parameters: docs('Header', 'عنوان سمت راست با یک دکمه قبل از آن (برگشت یا بستن). سمت چپ آزاد است: آیکون، اکشن متنی یا هیچ.'),
  args: { title: 'مدیریت API', subtitle: '', start: 'back', endContent: 'یک آیکون', divider: true },
  argTypes: { start: { control: 'inline-radio', options: ['back', 'close', 'none'] }, endContent: { control: 'inline-radio', options: Object.keys(ends) } },
};
export const Playground = {};
export const Variants = {
  parameters: { controls: { disable: true } },
  render: () => { const s = stack([
    header({ title: 'کیف پول' }),
    header({ title: 'مدیریت API', end: ends['یک آیکون']() }),
    header({ title: 'کد معرف', end: ends['اکشن متنی']() }),
    header({ title: 'کلیدهای API', start: 'close' }),
    header({ title: 'انتقال داخلی', subtitle: 'مرحلهٔ ۲ از ۳', end: ends['دو آیکون']() }),
  ], 12); s.style.maxInlineSize = '390px'; return s; },
};

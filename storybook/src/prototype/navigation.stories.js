import { element, icon } from '../components.js';
import assets from '../generated/prototype-assets.json';
import { glyph, stage } from './preview.js';

export default {
  title: 'Patterns/Navigation',
  parameters: { docs: { description: { component: 'هدر صفحه و نوار سه‌تب خود پروتوتایپ. نام تب‌ها و آیکون‌ها هنگام ساخت از سورس اپ خوانده می‌شوند.' } } },
};

export const Header = {
  args: { title: 'کیف پول' },
  argTypes: { title: { control: 'text' } },
  render: ({ title }) => {
    const preview = stage('zp-prototype-navigation');
    const header = element('header', 'nav');
    const start = element('div', 'nav-slot');
    const end = element('div', 'nav-slot end');
    const back = element('button', 'icon-btn');
    back.type = 'button';
    back.setAttribute('aria-label', 'بازگشت');
    back.append(icon('arrow-right'));
    const status = element('p', 'zp-prototype-detail');
    status.setAttribute('role', 'status');
    back.onclick = () => { status.textContent = 'بازگشت به صفحهٔ قبل'; };
    start.append(back);
    header.append(start, element('span', 'nav-title', title), end);
    preview.append(header, status);
    return preview;
  },
};

export const BottomNavigation = {
  args: { selected: assets.tabs[0].id },
  argTypes: { selected: { control: 'select', options: assets.tabs.map(tab => tab.id) } },
  render: ({ selected }) => {
    const preview = stage('zp-prototype-navigation is-bottom');
    const title = element('h2', 'zp-prototype-screen-title');
    const nav = element('nav', 'tabbar2');
    nav.setAttribute('aria-label', 'منوی اصلی');
    nav.style.setProperty('--zp-tab-count', assets.tabs.length);
    const pill = element('span', 'glass');
    pill.setAttribute('aria-hidden', 'true');
    nav.append(pill);
    const tabs = assets.tabs.map(({ label, glyphs }) => {
      const item = element('button', 'tab2');
      item.type = 'button';
      item.append(...glyphs.map(glyph), element('span', '', label));
      nav.append(item);
      return item;
    });
    function update(index) {
      title.textContent = assets.tabs[index].label;
      nav.style.setProperty('--zp-tab-index', index);
      tabs.forEach((item, offset) => {
        item.classList.toggle('on', offset === index);
        item.setAttribute('aria-current', offset === index ? 'page' : 'false');
      });
    }
    tabs.forEach((item, index) => item.addEventListener('click', () => update(index)));
    update(Math.max(0, assets.tabs.findIndex(tab => tab.id === selected)));
    preview.append(title, nav);
    return preview;
  },
};

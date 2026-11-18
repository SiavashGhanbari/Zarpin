import tokens from '../generated/tokens.json';

const families = ['gold', 'amber', 'green', 'red', 'blue', 'neutral', 'accent', 'alpha-white', 'alpha-black', 'base', 'mist'];
const semanticGroups = ['background', 'content', 'border', 'action', 'accent', 'components'];

function swatches(palette, family) {
  const list = document.createElement('ul');
  list.className = 'zp-swatches';
  for (const [name, hex] of Object.entries(palette)) {
    if (family && !name.startsWith(family + '-')) continue;
    const item = document.createElement('li');
    item.className = 'zp-swatch';
    item.dir = 'ltr';
    const swatch = document.createElement('span');
    swatch.className = 'zp-swatch-color';
    swatch.style.backgroundColor = 'var(--' + name + ')';
    swatch.setAttribute('aria-hidden', 'true');
    const label = document.createElement('code');
    label.textContent = '--' + name;
    const value = document.createElement('span');
    value.textContent = hex.toUpperCase();
    item.append(swatch, label, value);
    list.append(item);
  }
  return list;
}

export default {
  title: 'Foundations/Color',
  parameters: {
    docs: { description: { component: 'رنگ‌های پایه و معنایی خوانده‌شده از پروتوتایپ زرپین.' } },
  },
};

export const Primitives = {
  args: { family: 'gold' },
  argTypes: { family: { control: 'select', options: families, name: 'خانوادهٔ رنگ' } },
  render: ({ family }) => swatches(tokens.primitives, family),
};

export const Semantic = {
  args: { group: 'background' },
  argTypes: { group: { control: 'select', options: semanticGroups, name: 'گروه معنایی' } },
  render: ({ group }, { globals }) => swatches(tokens[globals.theme === 'dark' ? 'dark' : 'light'], group),
};

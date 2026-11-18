import tokens from '../generated/tokens.json';

const scale = Object.keys(tokens.typography)
  .filter(name => name.startsWith('font-size-'))
  .map(name => name.slice('font-size-'.length));

export default {
  title: 'Foundations/Typography',
  args: { sample: 'زرپین', weight: 'regular' },
  argTypes: {
    sample: { control: 'text', name: 'متن نمونه' },
    weight: { control: 'select', options: ['regular', 'semibold', 'bold'], name: 'وزن' },
  },
  render: ({ sample, weight }) => {
    const list = document.createElement('div');
    for (const step of scale) {
      const row = document.createElement('div');
      row.className = 'zp-type-sample';
      const text = document.createElement('span');
      text.className = 't-' + step + (weight === 'regular' ? '' : '-' + weight);
      text.textContent = sample;
      const label = document.createElement('code');
      label.className = 'zp-type-token';
      label.dir = 'ltr';
      label.textContent = step + ' · ' + tokens.typography['font-size-' + step] + ' / ' + tokens.typography['line-height-' + step];
      row.append(text, label);
      list.append(row);
    }
    return list;
  },
};

export const Scale = {};

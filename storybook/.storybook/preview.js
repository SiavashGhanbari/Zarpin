import '../src/generated/tokens.css';
import '../src/ds/components.css';
import '../src/storybook.css';

export default {
  tags: ['autodocs'],
  initialGlobals: { theme: 'light' },
  globalTypes: {
    theme: {
      description: 'تم رنگی',
      toolbar: { title: 'تم', icon: 'paintbrush', items: [{ value: 'light', title: 'روشن' }, { value: 'dark', title: 'تیره' }], dynamicTitle: true },
    },
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: { disable: true },
    options: { storySort: { order: ['Introduction', 'Foundations', ['Color', 'Typography', 'Icons', 'Figma sync', 'Figma coverage'], 'Components', 'Patterns'] } },
  },
  decorators: [
    (Story, context) => {
      const canvas = document.createElement('div');
      canvas.className = 'zp-canvas';
      canvas.lang = 'fa';
      canvas.dir = 'rtl';
      canvas.dataset.theme = context.globals.theme === 'dark' ? 'dark' : 'light';
      canvas.append(Story());
      return canvas;
    },
  ],
};

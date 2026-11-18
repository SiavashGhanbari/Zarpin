import '../src/generated/foundations.css';
import '../src/components.css';

export default {
  tags: ['autodocs'],
  initialGlobals: { theme: 'light' },
  globalTypes: {
    theme: {
      description: 'حالت رنگ دیزاین سیستم زرپین',
      toolbar: {
        title: 'تم',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'روشن' },
          { value: 'dark', title: 'تیره' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: { disable: true },
    options: {
      storySort: {
        order: ['Foundations', ['Color', 'Typography'], 'Components', 'Patterns'],
      },
    },
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

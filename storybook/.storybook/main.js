export default {
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-docs'],
  staticDirs: [{ from: '../src/generated/prototype', to: '/prototype' }],
  framework: '@storybook/html-vite',
  core: { disableTelemetry: true },
};

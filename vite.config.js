const { createVuePlugin } = require('vite-plugin-vue2');

module.exports = {
  plugins: [createVuePlugin(/*options*/)],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3009,
    proxy: {
      '^/medical': {
        target: 'https://medical-manage-fat.soundai.net',
        changeOrigin: true,
      },
    },
  },
  css: {
    preprocessorOptions: {},
  },
};

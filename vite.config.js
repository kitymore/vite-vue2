const { createVuePlugin } = require('vite-plugin-vue2')

module.exports = {
    plugins: [createVuePlugin( /*options*/ )],
    resolve:{
        alias:{
          '@':'/src'
        },
      },
      server: {
        port:3009,
        cors:true,
      },
}
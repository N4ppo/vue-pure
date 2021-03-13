const path = require('path');


// vue.config.js
module.exports = {
  chainWebpack: config => {

    // Purescript Loader
    config.module
      .rule('purescript')
      .test(/\.purs$/)
      .use('purs-loader')
      .loader('purs-loader')
      .tap(options => ({
        src: [
          path.join('src', '**', '*.purs'),
          path.join('test', '**', '*.purs'),
          path.join('.spago', '*', '*', 'src', '**', '*.purs'),
        ],
        psc: 'psa',
        bundle: false,
        watch: true
      }))

    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('vue-loader')
  }
}

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Arte em Peças',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Router config
   */
  router: {
    base: '/eventos/2019/arteempecas/'
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa',
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy'
  ],

  /*
   ** Google Analytics Config
   */
  googleAnalytics: {
    id: 'UA-1495990-5'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      // do not include jpgs and pngs as base64 as an inline image
      config.module.rules.find(
        rule => !!'file.jpg'.match(rule.test)
      ).exclude = /\.responsive\.(jpe?g|png)$/

      config.module.rules.push({
        test: /\.responsive\.(jpe?g|png)$/i,
        loader: 'responsive-loader',
        options: {
          min: 575,
          max: 1140,
          steps: 7,
          placeholder: true,
          quality: 100,
          adapter: require('responsive-loader/sharp')
        }
      })

      // console.log(config.module.rules)
    },

    cache: false
  }
}

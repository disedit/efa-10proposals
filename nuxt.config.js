export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Shaping a Europe of All Peoples - European Free Alliance',
    htmlAttrs: {
      lang: 'en',
      class: 'bg-purple'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#80379b'},
      { hid: 'keywords', name: 'keywords', content: 'CoFoE, europe, peoples, future, proposals, self-determination, efa, european free alliance' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@EFAparty' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://e-f-a.org/wp-content/themes/efa/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    './plugins/router.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://www.npmjs.com/package/nuxt-gsap-module
    'nuxt-gsap-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://i18n.nuxtjs.org/
    '@nuxtjs/i18n'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // i18n
  i18n: {
    locales: [
      { code: 'de', file: 'de.js', name: 'Deutsch' },
      { code: 'en', file: 'en.js', name: 'English' },
      { code: 'es', file: 'es.js', name: 'Espa??ol' },
      { code: 'fr', file: 'fr.js', name: 'Fran??ais' },
      { code: 'it', file: 'it.js', name: 'Italiano' },
      { code: 'nl', file: 'nl.js', name: 'Nederlands' },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'lang/',
    skipSettingLocaleOnNavigate: true,
  },

  eslint: { cache: false },

  gsap: {
    extraPlugins: {
      scrollTrigger: true
    }
  }
}

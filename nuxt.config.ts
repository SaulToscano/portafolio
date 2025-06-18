// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    pageTransition: {name: 'page', mode: 'default'},
    baseURL: '/portafolio/'
  },
  ssr: false,
  nitro: {
    preset: 'static'
  },
  modules: [
    '@nuxtjs/i18n',
    '@element-plus/nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-viewport',
    '@nuxt/icon',
  ],
  i18n: {
    // Define locales
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'es', name: 'Spanish', file: 'es.json' }
    ],
    bundle: {
      optimizeTranslationDirective: false,
    },
    defaultLocale: 'es', // Default locale
    lazy: true, // Enable lazy loading of translations
    //langDir: 'locales/', // Path to the translation files
    strategy: 'no_prefix', // URL strategy (prefixes /en/ or /fr/ in routes)
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'es'
    }
  }
})
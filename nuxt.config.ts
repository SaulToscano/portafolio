// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    pageTransition: {name: 'page', mode: 'default'},
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
    defaultLocale: 'en', // Default locale
    lazy: false, // Enable lazy loading of translations
    langDir: 'locales/', // Path to the translation files
    strategy: 'no_prefix', // URL strategy (prefixes /en/ or /fr/ in routes)
  }
})
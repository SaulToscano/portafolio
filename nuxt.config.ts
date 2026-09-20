// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    pageTransition: {name: 'page', mode: 'default'},
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
  image: {
    provider: 'vercel'
  },
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'es', name: 'Spanish', file: 'es.json' }
    ],
    bundle: {
      optimizeTranslationDirective: false,
    },
    defaultLocale: 'es',
    lazy: true,
    //langDir: 'locales/', // Path to the translation files
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'es'
    }
  }
})
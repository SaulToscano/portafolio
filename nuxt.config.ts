// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    pageTransition: {name: 'page', mode: 'default'},
    head: {
      script: [
        /* {src: "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"}, */
        /* {src: "script.js", type: "text/javascript", onload: "true"},
        {src: "style-switcher.js", type: "text/javascript"}, */
      ]
    }
  },
  modules: [
    '@element-plus/nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-viewport',
    '@nuxt/icon',
  ],
})
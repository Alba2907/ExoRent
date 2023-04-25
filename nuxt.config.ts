

// @ts-ignore
export default defineNuxtConfig({


  app: {
    // head
    head: {
      title: 'ExoRent',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'ElementPlus + Nuxt3',
        },
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
        {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'},
      ],
    }
  },

  // css
  css: ['~/assets/scss/index.scss'],


  // build
  build: {
    transpile: ['element-plus/es', 'graphql'],
  },

  typescript: {
    strict: true,
    shim: false,
  },


  // build modules '@pinia/nuxt' Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/strapi', '@vueuse/nuxt'],


  // strapi options
  strapi: {
    // url: process.env.API_URL,
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt',
  },

  // auto import components
  components: true,

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL
  },


})
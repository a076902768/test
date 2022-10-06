const routerBase =
  // process.env.DEPLOY_ENV === 'GH_PAGES'
  true
    ? {
      router: {
        base: '/test/'
      }
    }
    : {}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ...routerBase
})

const routerBase =
  // process.env.DEPLOY_ENV === 'GH_PAGES'
  true
    ? {
      router: {
        base: '/test/'
      }
    }
    : {}

console.log('routerBase : ', routerBase);


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ...routerBase
})

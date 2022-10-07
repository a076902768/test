const routerBase =
  // process.env.DEPLOY_ENV === 'GH_PAGES'
  true
    ? {
      target: 'static',
      router: {
        base: '/test/'
      }
    }
    : {}

console.log('routerBase : ', routerBase);


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  ...routerBase,
  ssr: false,
}

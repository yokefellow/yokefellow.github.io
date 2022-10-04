import Vuetify from 'vuetify'
//import 'vuetify/dist/vuetify.min.css'
export default ({ Vue, options, router, siteData, isServer }) => {
  // https://github.com/vuejs/vue-router/issues/2881
  const originalPush = router.push
  router.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject)
      return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch((err) => {
      err
    })
  }

  Vue.mixin({
    // https://github.com/vuejs/vuepress/pull/2639
    // https://segmentfault.com/a/1190000041346307
    // https://github.com/vuepress-reco/vuepress-theme-reco-1.x/commit/685e92d5af462839368100624af28a753ca7c994
    // https://juejin.cn/post/6894571293337878536
    mounted() {
      router.onReady(() => {
        const { hash } = document.location
        setTimeout(() => {
          if (hash.length > 1) {
            const id = decodeURIComponent(hash)
            const el = document.querySelector(
              `.reco-side-${decodeURIComponent(id).substring(1)}`
            )
            if (el) el.click()
          }
        }, 1500)
      })
    },
  })
  Vue.use(Vuetify)
  options.vuetify = new Vuetify()
}

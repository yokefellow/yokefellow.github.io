export default ({ Vue, options, router, siteData, isServer }) => {
  /* https://github.com/vuejs/vue-router/issues/2881 */
  const originalPush = router.push
  router.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject)
      return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch((err) => {
      err
    })
  }
}

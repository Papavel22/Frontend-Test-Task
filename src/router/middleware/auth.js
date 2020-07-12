export default function auth ({ next, store }) {
  if (!store.getters['auth/getAuthStatus']) {
    return next({
      name: 'About'
    })
  }
  return next()
  // store.dispatch('auth/updateAuthStatus').then(val => {
  //   if (!store.getters['auth/getAuthStatus']) {
  //     return next({
  //       name: 'About'
  //     })
  //   }
  //   return next()
  // })
}

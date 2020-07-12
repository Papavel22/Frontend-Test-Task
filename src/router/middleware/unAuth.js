export default function unAuth ({ next, store }) {
  if (store.getters['auth/getAuthStatus']) {
    return next({
      name: 'Home'
    })
  }
  return next()
}

export default function auth ({ next, store }) {
  if (!store.getters['auth/getAuthStatus']) {
    return next({
      name: 'Login'
    })
  }
  return next()
}

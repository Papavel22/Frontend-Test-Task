import Auth from '../../services/Auth'

export default {
  namespaced: true,
  state: {
    authStatus: false,
    user: {},
    error: ''
  },
  getters: {
    getAuthStatus: (state) => state.authStatus,
    getError: (state) => state.error,
    getUser: (state) => state.user
  },
  mutations: {
    confirmAuth (state) {
      state.authStatus = true
    },
    rejectAuth (state) {
      state.authStatus = false
    },
    setError (state, err) {
      state.error = err
    },
    clearError (state) {
      state.error = ''
    },
    setUserData (state, userData) {
      state.user = userData || ''
    }
  },
  actions: {
    async signIn ({ commit, dispatch }, { email, password }) {
      dispatch('loader/toggleLoader', null, { root: true })
      try {
        await Auth.signIn(email, password)
        dispatch('loader/toggleLoader', null, { root: true })
        commit('confirmAuth')
        dispatch('updateUserData')
      } catch (e) {
        dispatch('loader/toggleLoader', null, { root: true })
        commit('setError', e)
        throw e
      }
    },
    async signUp ({ commit, dispatch }, { email, password }) {
      dispatch('loader/toggleLoader', null, { root: true })
      try {
        await Auth.signUp(email, password)
        dispatch('loader/toggleLoader', null, { root: true })
        commit('confirmAuth')
        dispatch('updateUserData')
      } catch (e) {
        dispatch('loader/toggleLoader', null, { root: true })
        commit('setError', e)
        throw e
      }
    },
    async logOut ({ commit, dispatch }) {
      dispatch('loader/toggleLoader', null, { root: true })
      try {
        await Auth.logOut()
        dispatch('loader/toggleLoader', null, { root: true })
        dispatch('updateUserData')
        commit('rejectAuth')
      } catch (e) {
        dispatch('loader/toggleLoader', null, { root: true })
      }
    },
    async updateUserData ({ commit }) {
      try {
        const user = await Auth.getUser()
        commit('setUserData', user)
      } catch (e) {
        console.log(e)
      }
    },
    clearError ({ commit }) {
      commit('clearError')
    }
  }

}

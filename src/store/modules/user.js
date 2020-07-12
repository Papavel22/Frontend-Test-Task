import User from '../../services/User'

export default {
  namespaced: true,
  state: {
    user: {},
    emailError: ''
  },
  getters: {
    getUser: (state) => state.user,
    getEmailError: (state) => state.emailError
  },
  actions: {
    async updateUserData ({ commit }) {
      try {
        const user = await User.getUser()
        commit('setUserData', user)
      } catch (e) {
        console.log(e)
      }
    },
    async changeEmail ({ commit }, email) {
      try {
        await User.changeEmail(email)
        commit('setUserEmail', email)
      } catch (e) {
        commit('setChangeEmailError', e)
        throw e
      }
    },
    clearError (commit) {
      commit('clearError')
    }
  },
  mutations: {
    setUserData (state, userData) {
      state.user = { ...userData } || ''
    },
    setUserEmail (state, email) {
      console.log(state.user)
    },
    setChangeEmailError (state, error) {
      state.emailError = error
    },
    clearError (state) {
      state.emailError = ''
    }

  }
}

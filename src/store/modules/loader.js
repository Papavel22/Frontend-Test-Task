export default {
  namespaced: true,
  state: {
    loaderState: false
  },
  getters: {
    getLoaderState: (state) => state.loaderState
  },
  mutations: {
    toggleLoaderState (state) {
      state.loaderState = !state.loaderState
    }
  },
  actions: {
    toggleLoader ({ commit }) {
      commit('toggleLoaderState')
    }
  }

}

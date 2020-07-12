import Vue from 'vue'
import Vuex from 'vuex'
import loader from './modules/loader'
import auth from './modules/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    loader,
    auth
  }
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/app'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyBY-ZkWmPm0N5ejJaoslak11FmiU2uz3Rs',
  authDomain: 'spd-load-7701c.firebaseapp.com',
  databaseURL: 'https://spd-load-7701c.firebaseio.com',
  projectId: 'spd-load-7701c',
  storageBucket: 'spd-load-7701c.appspot.com',
  messagingSenderId: '786482399931',
  appId: '1:786482399931:web:b14edad1e37a2890f3779e'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
let app
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})

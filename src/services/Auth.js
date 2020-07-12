import * as firebase from 'firebase/app'
import 'firebase/auth'
import router from '../router'

export default {
  signIn (email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  },
  getUser () {
    return firebase.auth().currentUser
  },
  signUp (email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  },
  logOut () {
    firebase.auth().signOut().then(val => {
      router.replace({ name: 'Login' })
    })
    return firebase.auth().signOut()
  }
}

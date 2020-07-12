import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  signIn (email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  },
  signUp (email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  },
  logOut () {
    return firebase.auth().signOut()
  }
}

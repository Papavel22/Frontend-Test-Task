import * as firebase from 'firebase'
import 'firebase/auth'

export default {
  getUser () {
    return firebase.auth().currentUser
  },
  changeEmail (email) {
    const user = this.getUser()
    return user.updateEmail(email)
  }
}

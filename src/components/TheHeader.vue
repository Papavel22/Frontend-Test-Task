<template>
  <v-app-bar
    app
    color="indigo"
    dark
  >
    <v-toolbar-title>Application</v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="!authStatus">
      <router-link :to="{ name: 'Login' }"><v-btn small color="primary" dark>Login</v-btn></router-link>
      <v-divider
        class="mx-4"
        inset
        vertical
      ></v-divider>
      <router-link :to="{ name: 'Register' }"><v-btn small color="primary" dark>Register</v-btn></router-link>
    </div>
    <div v-else>
      <span> {{ user.email }}</span>
      <v-divider
        class="mx-4"
        inset
        vertical
      ></v-divider>
      <modal @confirmLogOut="logOut"></modal>
<!--      <v-btn small color="primary" @click="logOut" dark> Log out</v-btn>-->
      <div class="user-info">
      </div>
    </div>

  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Modal from './Modal'

export default {
  name: 'the-header',
  components: { Modal },
  computed: {
    ...mapGetters({
      authStatus: 'auth/getAuthStatus',
      user: 'auth/getUser'
    })
  },
  methods: {
    ...mapActions({
      logOut: 'auth/logOut'
    })
    // logOut () {
    //   try {
    //     const data = firebase.auth().signOut()
    //     console.log(data)
    //     this.$router.replace({ name: 'Login' })
    //   } catch (e) {
    //     console.log(e)
    //   }
    // }
  }
}
</script>

<style scoped>

</style>

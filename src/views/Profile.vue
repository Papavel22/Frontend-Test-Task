<template>
<div>
  <v-container>
    <h1>Profile page</h1>
    <div
      v-if="!emailChangeMode"
      class="email">
      <div
        class="email">
        {{ user.email }}
      </div>
      <v-btn small color="primary" @click="onChangeEmailClick" dark>Change Email</v-btn>
    </div>
    <email-change-form
      v-else
      @chanelChangeEmail="onChanelChangeEmail"
      @changeEmail="onChangeEmail"
      :userEmail="user.email"
      :error="emailError">
    </email-change-form>
  </v-container>
</div>
</template>

<script>
import EmailChangeForm from '../components/TheEmailChangeForm'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Profile',
  components: { EmailChangeForm },
  data () {
    return {
      emailChangeMode: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/getUser',
      emailError: 'user/getEmailError'
    })
  },
  methods: {
    ...mapActions({
      changeEmail: 'user/changeEmail'
    }),
    onChangeEmailClick () {
      this.emailChangeMode = true
    },
    onChanelChangeEmail () {
      this.emailChangeMode = false
    },
    onChangeEmail (email) {
      this.changeEmail(email).then(_ => { this.emailChangeMode = false })
    }
  }
}
</script>

<style scoped>

</style>

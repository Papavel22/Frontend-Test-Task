<template>
  <div>
    <v-container>
      <h1>Login page</h1>
          <v-form
            ref="form"
            v-model="valid"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            />
            <v-text-field
              type="password"
              v-model="password"
              :rules="passwordRules"
              label="Password"
              required
            />
            <v-alert
              v-if="error"
              dense
              outlined
              align="center"
              type="error">
              {{ error }}
            </v-alert>
            <v-btn
              :disabled="!valid"
              color="primary"
              class="mr-4"
              @click="validate"
            >
              Login
            </v-btn>
          </v-form>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      valid: false,
      password: '',
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required'
      ]
    }
  },
  computed: {
    ...mapGetters({
      error: 'auth/getError'
    })
  },
  beforeDestroy () {
    this.clearError()
    this.$refs.form.reset()
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signIn',
      clearError: 'auth/clearError'
    }),
    validate () {
      this.$refs.form.validate() &&
      this.signIn({ email: this.email, password: this.password }).then(
        _ => this.$router.replace({ name: 'Home' })
      )
    }
  }
}
</script>

<style >

</style>

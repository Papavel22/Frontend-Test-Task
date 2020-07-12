<template>
  <div>
    <v-container>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
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
          type="error">
          {{ error }}
        </v-alert>
        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4"
          @click="validate"
        >
          Register
        </v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
// import * as firebase from 'firebase/app'
// import 'firebase/auth'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Register',
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
      signUp: 'auth/signUp',
      clearError: 'auth/clearError'
    }),
    validate () {
      this.$refs.form.validate() &&
      this.signUp({ email: this.email, password: this.password }).then(
        _ => this.$router.replace({ name: 'Home' })
      )
    }
  }
}
</script>

<style lang="scss" scoped>
  input {
    border: 1px solid black;
    margin-bottom: 15px;
  }

  .error {
    color: red;
  }
</style>

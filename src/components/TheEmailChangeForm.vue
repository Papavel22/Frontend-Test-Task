<template>
  <v-row justify="center">
    <v-col
      cols = 12
      md="4"
    >
      <v-form
        ref="form"
        v-model="valid"
      >
          <v-text-field
            v-model="localEmail"
            :rules="emailRules"
            label="E-mail"
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
            Save
          </v-btn>
          <v-btn
            color="primary"
            class="mr-4"
            @click="reset"
          >
            Chanel
          </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'email-change-form',
  data () {
    return {
      localEmail: '',
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        v => v !== this.userEmail || 'Please enter a new email'
      ]
    }
  },
  props: {
    userEmail: String,
    error: String
  },
  created () {
    this.localEmail = this.userEmail
  },
  methods: {
    validate () {
      this.$refs.form.validate() && this.$emit('changeEmail', this.localEmail)
    },
    reset () {
      this.$refs.form.reset()
      this.$emit('chanelChangeEmail')
    }
  }
}
</script>

<style scoped>

</style>

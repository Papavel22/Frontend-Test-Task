<template>
<div>
  <v-footer
    color="indigo"
    app
  >
    <span class="white--text">&copy; {{ date }}</span>
  </v-footer>
</div>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  name: 'the-footer',
  data () {
    return {
      timeFormat: 'dd/MM/yyyy HH:mm:ss',
      date: ''
    }
  },
  mounted () {
    setInterval(_ => {
      this.date = DateTime.local().toFormat(this.timeFormat)
    }, 1000)
  },
  methods: {
    setDate () {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
      this.date = `
      ${new Date().getDate()}
      ${months[new Date().getMonth()]}
      ${new Date().getFullYear()}
      ${(new Date().getHours())}:${(new Date().getMinutes())}:${(new Date().getSeconds())}`
    }
  }
}
</script>

<style scoped>

</style>

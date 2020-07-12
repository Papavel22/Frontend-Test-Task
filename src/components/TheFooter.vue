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
  }
}
</script>

<style scoped>

</style>

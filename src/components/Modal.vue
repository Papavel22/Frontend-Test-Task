<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        small
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
      >
        Log Out
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">Are you sure?</v-card-title>
      <v-card-text>Are you sure you would like to log out?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary darken-1" text @click="dialog = false">No</v-btn>
        <v-btn color="primary darken-1" text @click="confirmLogOut">Yes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'modal',
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    confirmLogOut () {
      this.$emit('confirmLogOut')
      this.dialog = false
    }
  }
}
</script>

<style scoped>

</style>

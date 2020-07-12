<template>
  <div id="app">
      <v-app id="inspire">
        <the-header/>
        <v-main>
          <v-overlay
            v-if="loading"
          >
            <v-progress-circular
              :size="70"
              :width="7"
              color="primary"
              indeterminate
            ></v-progress-circular>
          </v-overlay>
          <router-view></router-view>
        </v-main>
        <the-footer/>
      </v-app>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'

export default {
  name: 'App',
  components: { TheFooter, TheHeader },
  computed: {
    ...mapGetters({
      loading: 'loader/getLoaderState'
    })
  }
}
</script>

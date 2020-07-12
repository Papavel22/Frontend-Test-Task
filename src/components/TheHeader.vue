<template>
  <v-app-bar
    app
    color="indigo"
    dark
  >
    <v-spacer></v-spacer>
    <div v-if="!authStatus">
      <router-link :to="{ name: 'Login' }"><v-btn small color="primary" dark>Login</v-btn></router-link>
      <v-divider
        class="mx-4"
        inset
        vertical
      ></v-divider>
      <router-link
        :to="{ name: 'Register' }">
        <v-btn
          @click="dropdownIsVisible = false"
          small
          color="primary"
          dark>
          Register
        </v-btn>
      </router-link>
    </div>
    <div v-else class="on-auth-nav">
      <span> {{ user.email }}</span>
      <v-divider
        class="mx-4"
        vertical
      ></v-divider>
      <button class="dropdown-button" @click="toggleDropdown">
        <v-icon>{{ icons.mdiAccount }}</v-icon>
      </button>
      <div v-if="dropdownIsVisible" class="dropdown">
        <ul class="dropdown-list">
          <li
            class="dropdown-item">
            <router-link class="dropdown-link"
              :to="{ name: 'Profile' }">
              Profile
            </router-link>
          </li>
          <li
            class="dropdown-item">
            <modal
              @confirmLogOut="onClickLogOut">
            </modal>
          </li>
        </ul>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Modal from './Modal'
import { mdiAccount } from '@mdi/js'

export default {
  name: 'the-header',
  components: { Modal },
  data () {
    return {
      icons: {
        mdiAccount
      },
      dropdownIsVisible: false
    }
  },
  computed: {
    ...mapGetters({
      authStatus: 'auth/getAuthStatus',
      user: 'user/getUser'
    })
  },
  methods: {
    ...mapActions({
      logOut: 'auth/logOut'
    }),
    toggleDropdown () {
      this.dropdownIsVisible = !this.dropdownIsVisible
    },
    onClickLogOut () {
      this.dropdownIsVisible = false
      this.logOut().then(_ => { this.$router.replace({ name: 'Login' }) })
    }
  }
}
</script>

<style lang="scss" scoped>
  .on-auth-nav {
    position: relative;
    display: flex;
    padding: 0 15px;
  }
  .dropdown {
    position: absolute;
    right: 0;
    top: 110%;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    &-button {
      border: none;
      outline: none!important;
      transition: all .5s linear;
      &:hover {
        transform: scale(1.2);
      }
    }
    &-list {
      list-style: none;
      padding: 15px;
      background-color: white;
      border-radius: 5px;
    }
    &-link {
      text-decoration: none;
    }
    &-item {
      color: #1976d2;
      margin-bottom: 15px;
      text-align: center;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>

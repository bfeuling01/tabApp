<template>
  <v-toolbar fixed class='cyan' dark>
    <v-toolbar-title class='mr-4'>
      <span class='home' @click="navigateTo({name: 'root'})">
        Tab Tracker
      </span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark to='songs'>
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn"
      flat dark to='login'>
        Log In
      </v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn"
      flat dark to='register'>
        Sign Up
      </v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn"
      flat dark to='logout'>
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.home:hover {
  cursor: pointer;
  color: #E0E0E0;
}
</style>

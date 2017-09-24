<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title='Login'>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Email Address"
            v-model="email"></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"></v-text-field>
          <div class="danger-alert" v-html="error" />
          <br>
          <v-btn
            @click="login" class="cyan" dark>
            Login
          </v-btn>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import authService from '@/services/authService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await authService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>

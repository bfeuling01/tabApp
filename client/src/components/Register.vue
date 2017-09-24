<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form
            name="tab-tracker-form"
            autocomplete="off">
            <v-text-field
              label="Email Address"
              v-model="email"></v-text-field>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              autocomplete="new-password">
            </v-text-field>
            <div class="danger-alert" v-html="error" />
            <br>
            <v-btn
              @click="register" class="cyan" dark>
              Register
            </v-btn>
          </form>
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
    async register () {
      try {
        const response = await authService.register({
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

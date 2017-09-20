<template>
  <div>
    <h1>REGISTER</h1>

    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email" />

    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password" />

    <button
      @click="register">
      Register
    </button>

  </div>
</template>

<script>
import authService from '@/services/authService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await authService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<style scoped>

</style>

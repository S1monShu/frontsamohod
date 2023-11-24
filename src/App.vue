<template>
  <div class="container py-3">
    <Header />
      <router-view></router-view>
    <Footer />
</div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import axios from 'axios'

  export default{
    name: 'app',
    components: {
      Footer,
      Header
    },
    created () {
    const userInfo = localStorage.getItem('user')
    if (userInfo) {
      const userData = JSON.parse(userInfo)
      this.$store.commit('SET_USER_DATA', userData)
    }
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
          this.$store.dispatch('LOGOUT')
        }
        return Promise.reject(error)
        }
      )
    },
  }
</script>

<style>
 @import url(./assets/css/bootstrap.min.css);
</style>

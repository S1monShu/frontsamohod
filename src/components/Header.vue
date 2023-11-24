<template>
    <header>
        <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
            <router-link to="/" class="d-flex align-items-center text-dark text-decoration-none">
                <span class="fs-4">«Самоход»</span>
            </router-link>
                

            <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <router-link to="orders" v-if="IS_LOGGED" class="me-3 py-2 text-dark text-decoration-none">Мои Заказы</router-link>
                <router-link to="cart" v-if="IS_LOGGED" class="me-3 py-2 text-dark text-decoration-none">Корзина</router-link>
                <router-link to="register" v-else class="me-3 py-2 text-dark text-decoration-none">Регистрация</router-link>
                <router-link to="login" v-if="!IS_LOGGED" class="me-3 py-2 text-dark text-decoration-none">Авторизация</router-link>
                <a @click="logout()" v-if="IS_LOGGED"  class="me-3 py-2 text-dark text-decoration-none">Выход</a>
            </nav>
        </div>
    </header>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    data(){
        return {
            name: 'Header',
            title: '',
            currentPage: this.$route.name,
        }
    },
    computed: {
        ...mapGetters([
        'IS_LOGGED'
        ])
    },
  methods: {
    logout () {
      this.$store.dispatch('LOGOUT')
    }
  },
}
</script>
<style>
    @import url(../assets/css/bootstrap.min.css);
</style>
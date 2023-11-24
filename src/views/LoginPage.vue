<template>
  <div class="container py-3">
    <main>
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal">Авторизация</h1>
    </div>
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
          <div class="col">
              <div class="row">
                  <form @submit.prevent="login">
                      <div class="form-floating mb-3">
                          <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                          <label for="floatingInput">Email</label>
                      </div>
                      <div class="form-floating mb-3">
                          <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                          <label for="floatingPassword">Password</label>
                      </div>

                      <button class="w-100 btn btn-lg btn-primary mb-3" type="submit">Войти</button>
                      <a @click="$router.back()" class="w-100 btn btn-lg btn-outline-info">Назад</a>
                  </form>
              </div>

          </div>
      </div>
  </main>
  </div>
</template>

<script>
export default {
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch('LOGIN', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: '/' })
        })
        .catch(err => {
          console.log(err)
        })
    },
  }
}
</script>

<style>
  @import url(../assets/css/bootstrap.min.css);
</style>

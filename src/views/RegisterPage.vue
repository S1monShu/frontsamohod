<template>
    <div class="container py-3">
        <main>
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 class="display-4 fw-normal">Регистрация</h1>
            </div>
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
                <div class="col">
                    <div class="row">
                        <form @submit.prevent="signup">
                            <h1 class="h3 mb-3 fw-normal">Пожалуйста заполните все поля</h1>
                            <div class="form-floating mb-3">
                                <input v-model="fio" type="text" class="form-control" id="floatingFio" placeholder="ФИО">
                                <label for="floatingFio">ФИО</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput">Email</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                                <label for="floatingPassword">Password</label>
                            </div>
    
                            <button class="w-100 btn btn-lg btn-primary mb-3" type="submit">Зарегистрироваться</button>
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
      fio: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signup() {
      this.$store
        .dispatch('SIGNUP', {
          fio: this.fio,
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
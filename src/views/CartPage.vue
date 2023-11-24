<template>
    <div class="container py-3">
        <main>
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 class="display-4 fw-normal">Корзина</h1>
            </div>
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div class="col" v-for="item in CART" :key="item.product_id">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">{{ item.name }}</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">{{ item.price }}р.<small class="text-muted fw-light"> &times; {{ item.quantity }}
                                шт.</small></h1>
                            <h1 class="card-title pricing-card-title"> {{ item.price * item.quantity }}р. </h1>
                            <button @click="addItem(item.product_id)" type="button" class="btn btn-lg btn-info mb-3">+</button>
                            <button @click="deleteItem(item.id)" type="button" class="btn btn-lg btn-warning mb-3">&minus;</button>
                        </div>
                    </div>
                </div>
                <h2 class="w-100">Итоговая стоимость: {{ CART_PRICE }}р.</h2>
            </div>
            <div class="row justify-content-center gap-1">
                <a @click="$router.back()" class="col-6 btn btn-lg btn-outline-info mb-3" type="button">Назад</a>
                <button type="button" class="col-6 btn btn-lg btn-primary mb-3">Оформить заказ</button>
    
            </div>
        </main>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data(){
    return {
        name: 'CartPage',
        cart: [],
        token: null
    }
  },
  computed:{
    ...mapGetters([
            'CART', 'CART_PRICE'
        ])
  },
  methods:{
    ...mapActions([
            'GET_CART_FROM_API', 
            'ADD_PRODUCT_TO_CART',
            'DELETE_PRODUCT_FROM_CART'
        ]),
    addItem(id){
        this.ADD_PRODUCT_TO_CART(id),
        this.GET_CART_FROM_API()
    },
    deleteItem(id){
        this.DELETE_PRODUCT_FROM_CART(id),
        this.GET_CART_FROM_API()
    }
  },
  mounted(){
        this.GET_CART_FROM_API()
    }
}
</script>

<style>
  @import url(../assets/css/bootstrap.min.css);
</style>
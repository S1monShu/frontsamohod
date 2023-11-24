<template>
  <main>
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal">Каталог товаров</h1>
    </div>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="col" v-for="product in PRODUCTS" :key="product.id">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">{{ product.name }}</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">{{ product.price }}р.</h1>
                    <p>{{ product.description }}</p>
                    <button @click="addItem(product.id)" type="button" class="w-100 btn btn-lg btn-outline-primary">Добавить в корзину</button>
                </div>
            </div>
        </div>
    </div>
</main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

  export default {
    data(){
        return{
            name: 'MainPage',
            products: null
        }
    },
    computed:{ 
        ...mapGetters([
            'PRODUCTS'
        ])
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_PRODUCT_TO_CART'
        ]),
        addItem(id){
            this.ADD_PRODUCT_TO_CART(id)
        },
    },
    mounted(){
        this.GET_PRODUCTS_FROM_API();
    }

  }
</script>

<style>
  @import url(../assets/css/bootstrap.min.css);
</style>

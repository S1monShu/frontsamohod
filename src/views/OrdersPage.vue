<template>
    <div class="container py-3">
        <main>
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 class="display-4 fw-normal">Ваши заказы</h1>
            </div>
            <div v-for="order in ORDERS" :key="order.id" class="row row-cols-1 row-cols-md-3 mb-3 text-center bg-light">
                <h2 class="w-100">Заказ №{{ order.id }}</h2>
    
                <div v-for="element in order" :key="element.id" class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">Название товара</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">200р.<small class="text-muted fw-light"> &times; 2 шт.</small></h1>
                            <p>Описание товара Описание товара Описание товара Описание товара Описание товара Описание товара</p>
                        </div>
                    </div>
                </div>
                <h2 class="w-100">Итоговая стоимость: {{ order.order_price }}р.</h2>
            </div>
    
            <div class="row justify-content-center gap-1">
                <a @click="$router.back()" class="col-6 btn btn-lg btn-outline-info mb-3" type="button">Назад</a>
            </div>
        </main>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data(){
        return {
            name: 'OrdersPage',
            products: null,
            order: null
        }
    },
    computed:{
        ...mapGetters([
            'ORDERS'
        ])
    },
    methods: {
        ...mapActions([
            'GET_ORDERS_FROM_API'
        ])
    },
    mounted() {
        this.GET_ORDERS_FROM_API()
    },
}
</script>
<style>
    @import url(../assets/css/bootstrap.min.css);
</style>
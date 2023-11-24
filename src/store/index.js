import { createStore } from 'vuex';
import axios from 'axios'

export default createStore({
  state: {
    products: null,
    user: null,
    cart: [],
    cart_price: null,
    orders: null,
  },
  getters: {
    PRODUCTS(state){
      return state.products
    },
    CART(state){
      return state.cart
    },
    CART_PRICE(state){
      return state.cart_price
    },
    ORDERS(state){
      return state.orders
    },
    IS_LOGGED: state => !!state.user,
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_USER_DATA (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      console.log(userData);
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData}`
    },
    CLEAR_USER_DATA() {
      localStorage.removeItem('user')
      window.location.reload();
    },
    SET_ORDER_TO_STATE (state, orders) {
      state.orders = orders;
    },
    SET_CART_TO_STATE: (state, cart) => {
      let temp = []; 
      let price = 0;
      cart.forEach(element => {
        element.quantity = 1;
        price += element.price;
        if(temp.length) {
          let isProductExists = false;
          temp.map(function (item){
            if(item.product_id === element.product_id) {
              isProductExists = true;
              item.quantity++;
            } 
          })
          if(!isProductExists){
            temp.push(element);
          }
        } else {
          temp.push(element);
        }
      });
      state.cart = temp;
      state.cart_price = price;
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({commit}){
      return axios 
      .get('http://127.0.0.1:8000/api-samohod/products')
      .then((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data.content)
        return products;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    },
    GET_CART_FROM_API({commit}){
      return axios 
      .get('http://127.0.0.1:8000/api-samohod/cart/')
      .then((cart) => {
        commit('SET_CART_TO_STATE', cart.data.content)
        return cart;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    },
    DELETE_PRODUCT_FROM_CART({commit}, index){
      return axios 
      .delete(`http://127.0.0.1:8000/api-samohod/cart/${index}`)
      .then( response => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    },
    ADD_PRODUCT_TO_CART({commit}, index){
      return axios
      .post(`http://127.0.0.1:8000/api-samohod/cart/${index}`)
      .then( response => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
    },
    GET_ORDERS_FROM_API({commit}){
      return axios
        .get(`http://127.0.0.1:8000/api-samohod/order/`)
        .then((orders) => {
          commit('SET_ORDER_TO_STATE', orders.data.content)
          return orders;
        })
    },
    LOGIN({commit}, credentials){
      return axios
        .post('http://127.0.0.1:8000/api-samohod/login', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data.content.user_token)
        })
    },
    SIGNUP({commit}, credentials){
      return axios
        .post('http://127.0.0.1:8000/api-samohod/signup', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data.content.user_token)
        })
    },
    LOGOUT ({ commit }) {
      commit('CLEAR_USER_DATA')
    }
  },
  modules: {
  }
})

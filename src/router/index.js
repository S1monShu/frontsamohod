import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import OrdersPage from '../views/OrdersPage.vue'
import CartPage from '../views/CartPage.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: MainPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
  {
    path: '/orders',
    name: 'orders',
    meta: {
      auth: true
    },
    component: OrdersPage
  },{
    path: '/cart',
    name: 'cart',
    meta: {
      auth: true
    },
    component: CartPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some(record => record.meta.auth) && !loggedIn) {
    next('/login')
    return
  }
  next()
})

export default router

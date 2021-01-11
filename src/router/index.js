import Vue from 'vue'
import Router from 'vue-router'
import RestInfoShoppingCart from '../components/popups/RestInfoShoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: RestInfoShoppingCart,
      meta: {
        title: '购物车'
      }
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import PopupsTesting from '../components/popups/PopupsTesting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: PopupsTesting,
      meta: {
        title: '购物车'
      }
    }
  ]
})

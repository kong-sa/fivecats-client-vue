import Vue from 'vue'
import Router from 'vue-router'
import PopUpsTest from '../components/popups/PopUpsTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: PopUpsTest,
      meta: {
        title: '购物车'
      }
    }
  ]
})

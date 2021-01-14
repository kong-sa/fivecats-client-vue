import Vue from 'vue'
import Router from 'vue-router'
import ComponentTesting from '../components/ComponentTesting'
import VideoMain from '../components/video/VideoMain'
import CustomerMain from '../components/customer/CustomerMain'
import CustomerOrderDetail from '../components/customer/order/detail/CustomerOrderDetail'
import MerchantMain from '../components/merchant/MerchantMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ComponentTesting,
      meta: {
        title: '已完成弹窗'
      }
    },
    {
      path: '/merchant/main',
      component: MerchantMain,
      meta: {
        title: '商家详情'
      }
    },
    {
      path: '/video/main',
      component: VideoMain,
      meta: {
        title: '视频播放'
      }
    },
    {
      path: '/customer/main',
      component: CustomerMain,
      children: [
        {
          path: '/detail/order',
          component: CustomerOrderDetail,
          meta: {
            title: '订单详细'
          }
        }
      ]
    }
  ]
})

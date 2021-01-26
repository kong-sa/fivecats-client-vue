import Vue from 'vue'
import Router from 'vue-router'
// my components
import ComponentTesting from '../components/ComponentTesting'
import FilterMain from '../components/filter/FilterMain'
import VideoMain from '../components/video/VideoMain'
import MerchantMain from '../components/merchant/MerchantMain'
import CustomerMain from '../components/customer/CustomerMain'
import DetailOrder from '../components/customer/order/DetailOrder'
import BbsMain from '../components/bbs/BbsMain'
import PostBbsArticle from '../components/bbs/child/PostBbsArticle'
import BbsArticleContent from '../components/bbs/child/BbsArticleContent'
import SpecialArea from '../components/bbs/special/SpecialArea'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ComponentTesting,
      meta: {
        title: '已完成部分'
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
        title: '美食视频'
      }
    },
    {
      path: '/customer/main',
      component: CustomerMain,
      meta: {
        title: '用户中心'
      },
      children: [
        {
          path: '/detail/order',
          component: DetailOrder,
          meta: {
            title: '订单详细'
          }
        }
      ]
    },
    {
      path: '/filter/main',
      component: FilterMain,
      meta: {
        title: '寻找美食'
      }
    },
    {
      path: '/bbs/main',
      component: BbsMain,
      meta: {
        title: '馋猫社区'
      }
    },
    {
      path: '/bbs/post/article',
      component: PostBbsArticle,
      meta: {
        title: '发表帖子'
      }
    },
    {
      path: '/bbs/article/content/:articleId',
      component: BbsArticleContent,
      meta: {
        title: '帖子内容'
      }
    },
    {
      path: '/bbs/:type',
      component: SpecialArea,
      meta: {
        title: '馋猫专区'
      }
    }
  ]
})

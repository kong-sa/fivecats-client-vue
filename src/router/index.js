import Vue from 'vue'
import Router from 'vue-router'

import ComponentTesting from '../components/ComponentTesting'
import FilterMain from '../components/filter/FilterMain'
import VideoMain from '../components/video/VideoMain'
import MerchantMain from '../components/merchant/MerchantMain'
import CustomerMain from '../components/customer/CustomerMain'
import DetailOrder from '../components/customer/order/DetailOrder'
// 馋猫社区组件
import BbsMain from '../components/bbs/BbsMain'
import BbsArticles from '../components/bbs/child/body/child/partition/BbsArticles'
import BbsPartition from '../components/bbs/child/body/BbsPartition'
import BbsPostArticle from '../components/bbs/child/body/BbsPostArticle'
import BbsArticleDetails from '../components/bbs/child/body/BbsArticleDetails'
import BbsSelfCenter from '../components/bbs/child/body/BbsSelfCenter'
import BbsBasicInfo from '../components/bbs/child/body/child/selfcenter/BbsBasicInfo'
import BbsAvatarInfo from '../components/bbs/child/body/child/selfcenter/BbsAvatarInfo'
import BbsAccountInfo from '../components/bbs/child/body/child/selfcenter/BbsAccountInfo'
import BbsArticleManagement from '../components/bbs/child/body/child/selfcenter/BbsArticleManagement'
import BbsPersonSpace from '../components/bbs/child/body/BbsPersonSpace'
import BbsUserMessage from '../components/bbs/child/body/BbsUserMessage'
import BbsUserMessageReplay from '../components/bbs/child/body/child/usermessage/BbsUserMessageReplay'
import BbsUserMessageLike from '../components/bbs/child/body/child/usermessage/BbsUserMessageLike'
import BbsMessageOfficial from '../components/bbs/child/body/child/usermessage/BbsMessageOfficial'
import BbsEditArticle from '../components/bbs/child/body/BbsEditArticle'

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
    // 馋猫社区路由
    {
      path: '/bbs',
      redirect: '/bbs/index',
      component: BbsMain,
      meta: {title: '馋猫社区'},
      children: [
        {
          path: '/bbs/index',
          component: BbsPartition,
          meta: {title: '馋猫社区'},
          children: [
            {
              path: '/bbs/:type',
              component: BbsArticles,
              meta: {title: '专区内容'}
            }
          ]
        },
        {
          path: '/bbs/article/posting',
          component: BbsPostArticle,
          meta: {title: '发表帖子'}
        },
        {
          path: '/bbs/article/details/:articleId',
          component: BbsArticleDetails,
          meta: {title: '帖子详情'}
        },
        {
          path: '/bbs/self/center',
          redirect: '/bbs/self/center/basic',
          component: BbsSelfCenter,
          meta: {title: '个人中心'},
          children: [
            {
              path: '/bbs/self/center/basic',
              component: BbsBasicInfo,
              meta: {title: '基本信息'}
            },
            {
              path: '/bbs/self/center/avatar',
              component: BbsAvatarInfo,
              meta: {title: '我的头像'}
            },
            {
              path: '/bbs/self/center/account',
              component: BbsAccountInfo,
              meta: {title: '我的账户'}
            },
            {
              path: '/bbs/self/center/articles',
              component: BbsArticleManagement,
              meta: {title: '我的帖子'}
            }
          ]
        },
        {
          path: '/bbs/person/space/:userId',
          component: BbsPersonSpace,
          meta: {title: '个人空间'}
        },
        {
          path: '/bbs/message/',
          component: BbsUserMessage,
          redirect: '/bbs/message/replay/',
          meta: {title: '我的消息'},
          children: [
            {
              path: '/bbs/message/replay/',
              component: BbsUserMessageReplay,
              meta: {title: '我的回复'}
            },
            {
              path: '/bbs/message/like/',
              component: BbsUserMessageLike,
              meta: {title: '获得的赞'}
            },
            {
              path: '/bbs/message/official',
              component: BbsMessageOfficial,
              meta: {title: '系统通知'}
            }
          ]
        },
        {
          path: '/bbs/edit/article/:editArticleId',
          component: BbsEditArticle,
          meta: {title: '修改帖子'}
        }
      ]
    }
  ]
})

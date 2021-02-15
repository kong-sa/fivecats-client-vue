import Vue from 'vue'
import Router from 'vue-router'

// 项目主组件
import FivecatsIndex from '../components/FivecatsIndex'
// 馋猫社区组件
import BbsMain from '../components/bbs/BbsMain'
import BbsPartition from '../components/bbs/child/BbsPartition'
import BbsBasicInfo from '../components/bbs/child/part/selfcenter/BbsBasicInfo'
import BbsSelfCenter from '../components/bbs/child/BbsSelfCenter'
import BbsAvatarInfo from '../components/bbs/child/part/selfcenter/BbsAvatarInfo'
import BbsAccountInfo from '../components/bbs/child/part/selfcenter/BbsAccountInfo'
import BbsPersonSpace from '../components/bbs/child/BbsPersonSpace'
import BbsUserMessage from '../components/bbs/child/BbsUserMessage'
import BbsPostArticle from '../components/bbs/child/BbsPostArticle'
import BbsEditArticle from '../components/bbs/child/BbsEditArticle'
import BbsArticleDetails from '../components/bbs/child/BbsArticleDetails'
import BbsMessageOfficial from '../components/bbs/child/part/usermessage/BbsMessageOfficial'
import BbsUserMessageLike from '../components/bbs/child/part/usermessage/BbsUserMessageLike'
import BbsUserMessageReplay from '../components/bbs/child/part/usermessage/BbsUserMessageReplay'
import BbsArticleManagement from '../components/bbs/child/part/selfcenter/BbsArticleManagement'
// 注册和登录组件
import AccessLogin from '../components/access/AccessLogin'
import AccessSignin from '../components/access/AccessSignin'
import ShopLogin from '../components/access/ShopLogin'
import ShopSignin from '../components/access/ShopSignin'
// 寻找美食组件
import FindMain from '../components/find/FindMain'
// 视频组件
import VideoMain from '../components/video/VideoMain'
import VideoPlayer from '../components/video/child/VideoPlayer'
// 商家信息组件
import ShopMain from '../components/shop/ShopMain'
// 客户中心组件
import UserMain from '../components/user/UserMain'
// 店铺维护组件
import ShopMaintain from '../components/shop/manager/ShopMaintain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: FivecatsIndex,
      meta: {title: '五只馋猫'},
      children: [
        {
          path: '/login',
          component: AccessLogin,
          meta: {title: '普通用户登陆'}
        },
        {
          path: '/signin',
          component: AccessSignin,
          meta: {title: '普通用户注册'}
        },
        {
          path: '/shop/login',
          component: ShopLogin,
          meta: {title: '商家登陆'}
        },
        {
          path: '/shop/signin',
          component: ShopSignin,
          meta: {title: '商家注册'}
        },
        {
          path: '/find',
          component: FindMain,
          meta: {title: '寻找美食'}
        },
        {
          path: '/video',
          component: VideoMain,
          meta: {title: '美食视频'}
        },
        {
          path: '/player/:videoId',
          component: VideoPlayer,
          meta: {title: '视频播放'}
        },
        {
          path: '/shop/:shopId',
          component: ShopMain,
          meta: {title: '商家详细'}
        },
        {
          path: '/maintain',
          component: ShopMaintain,
          meta: {title: '维护中心'}
        },
        {
          path: '/user/center',
          component: UserMain,
          meta: {title: '用户中心'}
        }
      ]
    },
    {
      path: '/bbs',
      redirect: '/bbs/index',
      component: BbsMain,
      meta: {title: '馋猫社区'},
      children: [
        {
          path: '/bbs/index',
          component: BbsPartition,
          meta: {title: '馋猫社区'}
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
          redirect: '/bbs/message/replay/',
          component: BbsUserMessage,
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

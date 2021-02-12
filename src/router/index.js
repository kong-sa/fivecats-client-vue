import Vue from 'vue'
import Router from 'vue-router'

// 馋猫项目主组件
import FivecatsIndex from '../components/FivecatsIndex'
// 馋猫社区组件
import BbsMain from '../components/bbs/BbsMain'
import BbsPartition from '../components/bbs/child/body/BbsPartition'
import BbsBasicInfo from '../components/bbs/child/body/child/selfcenter/BbsBasicInfo'
import BbsSelfCenter from '../components/bbs/child/body/BbsSelfCenter'
import BbsAvatarInfo from '../components/bbs/child/body/child/selfcenter/BbsAvatarInfo'
import BbsAccountInfo from '../components/bbs/child/body/child/selfcenter/BbsAccountInfo'
import BbsPersonSpace from '../components/bbs/child/body/BbsPersonSpace'
import BbsUserMessage from '../components/bbs/child/body/BbsUserMessage'
import BbsPostArticle from '../components/bbs/child/body/BbsPostArticle'
import BbsEditArticle from '../components/bbs/child/body/BbsEditArticle'
import BbsArticleDetails from '../components/bbs/child/body/BbsArticleDetails'
import BbsMessageOfficial from '../components/bbs/child/body/child/usermessage/BbsMessageOfficial'
import BbsUserMessageLike from '../components/bbs/child/body/child/usermessage/BbsUserMessageLike'
import BbsUserMessageReplay from '../components/bbs/child/body/child/usermessage/BbsUserMessageReplay'
import BbsArticleManagement from '../components/bbs/child/body/child/selfcenter/BbsArticleManagement'
// 注册或登录组件
import AccessLogin from '../components/access/AccessLogin'
import AccessSignin from '../components/access/AccessSignin'
// 寻找美食组件
import FindMain from '../components/find/FindMain'
// 视频区页面组件
import VideoMain from '../components/video/VideoMain'
import VideoPlayer from '../components/video/child/VideoPlayer'
// 商家组件
import ShopMain from '../components/shop/ShopMain'
// 客户组件
import UserMain from '../components/user/UserMain'
import ShopMaintainMain from '../components/shop/manager/ShopMaintainMain'
import ShopLogin from '../components/access/ShopLogin'
import ShopSignin from '../components/access/ShopSignin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      component: FivecatsIndex,
      meta: {title: '五只馋猫'},
      children: [
        {
          path: '/login',
          component: AccessLogin,
          meta: {title: '登陆'}
        },
        {
          path: '/signin',
          component: AccessSignin,
          meta: {title: '注册'}
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
          meta: {title: '视频区'}
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
          path: '/shop/maintain/',
          component: ShopMaintainMain,
          meta: {title: '店铺维护中心'}
        },
        {
          path: '/user/center',
          component: UserMain,
          meta: {title: '用户中心'}
        }
      ]
    },
    // 馋猫社区的路由
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

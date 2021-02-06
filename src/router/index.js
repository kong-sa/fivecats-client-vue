import Vue from 'vue'
import Router from 'vue-router'

// 馋猫项目主组件
import FivecatsIndex from '../components/FivecatsIndex'
// 馋猫社区页面组件
import BbsMain from '../components/bbs/BbsMain'
import BbsArticles from '../components/bbs/child/body/child/partition/BbsArticles'
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
// 注册或登录页面组件
import AccessMain from '../components/access/AccessMain'
import AccessLogin from '../components/access/child/AccessLogin'
import AccessSignin from '../components/access/child/AccessSignin'
// 寻找美食页面组件
import FindMain from '../components/find/FindMain'
import FindRestaurants from '../components/find/child/FindRestaurants'
// 视频区页面组件
import VideoMain from '../components/video/VideoMain'
import VideoDetails from '../components/video/child/VideoDetails'
import VideoType from '../components/video/child/VideoType'
import VideoAll from '../components/video/child/VideoAll'
import ShopDetails from '../components/find/child/ShopDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/find',
      component: FivecatsIndex,
      meta: {title: '五只馋猫'},
      children: [
        // 登陆或注册页面的路由
        {
          path: '/access',
          component: AccessMain,
          meta: {title: '登陆或注册'},
          children: [
            {
              path: '/access/login',
              component: AccessLogin,
              meta: {title: '登陆'}
            },
            {
              path: '/access/signin',
              component: AccessSignin,
              meta: {title: '注册'}
            }
          ]
        },
        // 寻找美食页面的路由
        {
          path: '/find',
          redirect: '/find/all',
          component: FindMain,
          meta: {title: '寻找美食'},
          children: [
            {
              path: '/find/:findType',
              component: FindRestaurants,
              meta: {title: '分类寻找'}
            },
            {
              path: '/find/all',
              component: FindRestaurants,
              meta: {title: '寻找美食'}
            }
          ]
        },
        {
          path: '/find/shop/details/:shopId',
          component: ShopDetails,
          meta: {title: '商家详细'}
        },
        // 视频区路由
        {
          path: '/video',
          redirect: '/video/all',
          component: VideoMain,
          meta: {title: '视频区'},
          children: [
            {
              path: '/video/all',
              component: VideoAll,
              meta: {title: '视频区'}
            },
            {
              path: '/video/:videoType',
              component: VideoType,
              meta: {title: '视频分类'}
            }
          ]
        },
        {
          path: '/video/details/:videoId',
          component: VideoDetails,
          meta: {title: '视频播放'}
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

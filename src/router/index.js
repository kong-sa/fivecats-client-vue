import Vue from 'vue'
import Router from 'vue-router'
import PopupsTesting from '../components/popups/PopupsTesting'
import VideoPreview from '../components/popups/video/VideoPreview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: PopupsTesting,
      meta: {
        title: '购物车'
      }
    },
    {
      path: '/video/preview',
      component: VideoPreview,
      meta: {
        title: '视频区 - 播放页'
      }
    }
  ]
})

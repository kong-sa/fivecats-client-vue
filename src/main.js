// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
// tinymce
import tinymce from 'tinymce'
import VueTinymce from '@packy-tang/vue-tinymce'
// axios
import axios from 'axios'
// nprogress
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
// element-ui
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import Element, {Message, MessageBox} from 'element-ui'
// assets file
import './assets/css/global.css'
import './assets/iconfont/iconfont.css'
// vue-tinymce
import 'tinymce/skins/content/default/content.min.css'
import 'tinymce/skins/ui/oxide/skin.min.css'
import 'tinymce/skins/ui/oxide/content.min.css'
import 'tinymce/themes/silver'
import 'tinymce/icons/default/icons'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/image'
import 'tinymce/langs/zh_CN'
import 'tinymce/plugins/link'

Vue.use(Element)
Vue.use(VueTinymce)
Vue.config.productionTip = false
Vue.prototype.$tinymce = tinymce
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$http = axios

axios.defaults.baseURL = 'http://120.77.245.208:8001/'
// axios.defaults.baseURL = 'http://localhost:8001'

axios.interceptors.request.use(config => {
  NProgress.start()
  return config
})
axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})

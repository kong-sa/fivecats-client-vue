// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import tinymce from 'tinymce'
import VueTinymce from '@packy-tang/vue-tinymce'
// The third-party components
import axios from 'axios'
import jqeury from 'jquery'
import NProgress from 'nprogress'
// element-ui components
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import Element, {Message, MessageBox} from 'element-ui'
// my assets file
import './assets/js/dialog'
import './assets/css/global.css'
// vue-tinymce
import 'tinymce/skins/content/default/content.min.css'
import 'tinymce/skins/ui/oxide/skin.min.css'
import 'tinymce/skins/ui/oxide/content.min.css'
import 'tinymce/themes/silver'
import 'tinymce/icons/default/icons'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/link'

Vue.use(Element)
Vue.use(VueTinymce)
Vue.config.productionTip = false
// set global tinymce
Vue.prototype.$tinymce = tinymce
// set global element-ui
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
// set global axios and jqeury
Vue.prototype.$ = jqeury
Vue.prototype.$http = axios
// set axios configuration
// axios.defaults.baseURL = 'http://120.77.245.208:8001/'
axios.defaults.baseURL = 'http://localhost:8001'
// set interceptors
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
  router,
  components: {App},
  template: '<App/>'
})

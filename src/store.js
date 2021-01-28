import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userObj: {
      code: 0,
      data: {
        'username': '',
        'fans': 0,
        'profile': '',
        'level': 0,
        'gold': 0,
        'experience': 0,
        'avatar': ''
      }
    },
  },
  mutations: {
    setUserObj (state, userObj) {
      state.userObj = userObj
    }
  },
  actions: {
  }
})

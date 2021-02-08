import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    var1: {
      code: 0,
      data: {
        'id': 0,
        'username': '',
        'email': '',
        'phone': 0,
        'fans': 0,
        'profile': '',
        'level': 0,
        'gold': 0,
        'experience': 0,
        'avatar': ''
      }
    },
    selectedDishes: []
  },
  mutations: {
    setVar1 (state, var1) {
      state.var1 = var1
    },
    addTrolley (state, dishesObj) {
      state.selectedDishes.push(dishesObj)
    }
  },
  actions: {}
})

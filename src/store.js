import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedDishes: [],
    user: {
      id: 0,
      avatar: '',
      username: '',
      password: '',
      email: '',
      phone: '',
      profile: '',
      fans: 0,
      gold: 0,
      experience: 0,
      level: 0,
      location: ''
    },
    bbsType: 'index'
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setDishes (state, dishes) {
      state.selectedDishes.push(dishes)
    },
    setBbsType (state, bbsType) {
      state.bbsType = bbsType
    }
  },
  actions: {}
})

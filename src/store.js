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
    shop: {
      average: 0,
      cover: '',
      date: '',
      endTime: '',
      id: 0,
      location: '',
      name: '',
      password: '',
      phone: '',
      profile: '',
      saleNum: 0,
      star: 0,
      startTime: '',
      status: '',
      tableNum: 0,
      tag: '',
      type: '',
      userId: 0,
      username: ''
    },
    bbsType: 'index'
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setShop (state, shop) {
      state.shop = shop
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

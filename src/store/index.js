import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import places from './modules/places'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    places
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import place from './modules/place'
import globalStates from './modules/global-states'

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
    place,
    globalStates
  }
})

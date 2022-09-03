import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$axios = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  timeout: 3000
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

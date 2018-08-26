import Vue from 'vue'
import VueRouter from 'vue-router'
import VueYoutube from 'vue-youtube'

import App from './App.vue'

import { routes } from './routes'

Vue.use(VueRouter)
Vue.use(VueYoutube)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  // store,
  // store vs firebase ?
  template: '<App/>',
  components: { App }
})







// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import { reduceImageSize, textTruncate } from './system/helpers'

Vue.config.productionTip = false

Vue.filter('truncate', textTruncate)
Vue.filter('imageSize', reduceImageSize)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

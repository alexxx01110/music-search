import Vue from 'vue'
import Router from 'vue-router'
import searchPage from '@/pages/search'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: {name: 'search'}
    },
    {
      path: '/search',
      name: 'search',
      component: searchPage
    }
  ]
})

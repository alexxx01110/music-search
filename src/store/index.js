import Vue from 'vue'
import Vuex from 'vuex'

import search from './modules/search'
import view from './modules/view'
import history from './modules/history'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    search,
    view,
    history
  }
})

export default store

const state = {
  viewMode: 'list'
}

const mutations = {
  SET_VIEW_MODE (state, mode) {
    state.viewMode = mode
    localStorage.setItem('viewMode', mode)
  }
}

const actions = {
  changeViewMode ({state, commit}, mode) {
    commit('SET_VIEW_MODE', mode)
  },
  loadViewMode ({state, commit}) {
    const modeInLocalStorage = localStorage.getItem('viewMode')
    if (modeInLocalStorage) {
      commit('SET_VIEW_MODE', modeInLocalStorage)
    }
  }
}

const getters = {
  getViewMode (state) {
    return state.viewMode
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

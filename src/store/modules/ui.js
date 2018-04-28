const state = {
  viewMode: 'list',
  mainMenuIsOpen: false
}

const mutations = {
  SET_VIEW_MODE (state, mode) {
    state.viewMode = mode
    localStorage.setItem('viewMode', mode)
  },
  TOGGLE_MAIN_MENU (state) {
    state.mainMenuIsOpen = !state.mainMenuIsOpen
  }
}

const actions = {
  changeViewMode ({state, commit}, mode) {
    commit('SET_VIEW_MODE', mode)
  },
  toggleMainMenu ({state, commit}) {
    commit('TOGGLE_MAIN_MENU')
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
  },
  getMainMenuState (state) {
    return state.mainMenuIsOpen
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

const state = {
  userHistory: [],
  query: ''
}

const mutations = {
  SET_USER_HISTORY (state, data) {
    state.userHistory = data
  },
  ADD_FIRST_TO_HISTORY (state, data) {
    state.userHistory = [data, ...state.userHistory]
    localStorage.setItem('userHistory', JSON.stringify(state.userHistory))
    state.query = data
  },
  DELETE_LAST_FROM_HISTORY (state) {
    state.userHistory.pop()
  },
  SET_QUERY_FROM_HISTORY (state, query) {
    state.query = query
  }
}

const actions = {
  writeUserHistory ({state, commit}, data) {
    const maxHistorySize = 5
    if (state.userHistory.length <= maxHistorySize) {
      commit('ADD_FIRST_TO_HISTORY', data)
    } else {
      commit('DELETE_LAST_FROM_HISTORY')
      commit('ADD_FIRST_TO_HISTORY', data)
    }
  },
  loadUserHistory ({state, commit}) {
    const historyLocal = localStorage.getItem('userHistory')
    if (historyLocal) {
      commit('SET_USER_HISTORY', JSON.parse(historyLocal))
    }
  },
  searchFromHistory ({state, commit, dispatch}, query) {
    commit('SET_QUERY_FROM_HISTORY', query)
    dispatch('searchRequest', query)
  }
}

const getters = {
  getUserHistory (state) {
    return state.userHistory
  },
  getQueryFromHistory (state) {
    return state.query
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

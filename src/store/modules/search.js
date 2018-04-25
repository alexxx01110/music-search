import soundCloud from '../../services/api/soundCloud'

const state = {
  searchResult: null,
  selectedTrack: null
}

const mutations = {
  SET_SEARCH_RESULT (state, result) {
    state.searchResult = result
  },
  SET_SELECTED_TRACK (state, track) {
    state.selectedTrack = track
  }

}

const actions = {
  searchRequest ({state, commit, dispatch}, query) {
    soundCloud.getTracks(query)
      .then(response => {
        commit('SET_SEARCH_RESULT', response.data)
        dispatch('writeUserHistory', query)
      })
      .catch(err => {
        console.log(err)
      })
  },
  fetchSelectedTrack ({state, commit}, track) {
    commit('SET_SELECTED_TRACK', track)
  }
}

const getters = {
  getAllTracks (state) {
    return state.searchResult
  },
  getPageCount (state) {
    return (itemsPerPage) => {
      console.log('All items = ', state.searchResult.length)
      console.log('Pages = ', Math.ceil(state.searchResult.length / itemsPerPage))
      return state.searchResult ? Math.ceil(state.searchResult.length / itemsPerPage) : 0
    }
  },
  getPaginatedTracks (state) {
    return (pageNumber, itemsPerPage) => {
      const start = pageNumber * itemsPerPage
      const end = start + itemsPerPage
      return state.searchResult.slice(start, end)
    }
  },
  getSelectedTrack (state) {
    return state.selectedTrack
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

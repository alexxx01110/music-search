import soundCloud from '../../services/api/soundCloud'

const state = {
  searchResult: null,
  selectedTrack: null,
  itemsPerPage: 6,
  pageNumber: 0,
  playbackMode: false
}

const mutations = {
  SET_SEARCH_RESULT (state, result) {
    state.searchResult = result
  },
  SET_SELECTED_TRACK (state, track) {
    state.selectedTrack = track
  },
  SET_ITEMS_PER_PAGE (state, items) {
    state.itemsPerPage = items
  },
  SET_PAGE_NUMBER (state, page) {
    state.pageNumber = page
  },
  SET_PLAYBACK_MODE (state, mode) {
    state.playbackMode = mode
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
  fetchSelectedTrack ({state, commit, dispatch}, track) {
    commit('SET_SELECTED_TRACK', track)
  },
  setItemsPerPage ({state, commit}, items) {
    commit('SET_ITEMS_PER_PAGE', items)
  },
  setPageNumber ({state, commit}, page) {
    commit('SET_PAGE_NUMBER', page)
  },
  changePlaybackMode ({state, commit}, mode) {
    console.log(mode)
    commit('SET_PLAYBACK_MODE', mode)
  },
  nextPage ({state, commit}) {
    commit('SET_PAGE_NUMBER', state.pageNumber + 1)
  },
  prevPage ({state, commit}) {
    commit('SET_PAGE_NUMBER', state.pageNumber - 1)
  },
  toNextTrack ({state, dispatch, getters}) {
    if (state.searchResult && state.selectedTrack) {
      const index = getters.getPaginatedTracks.indexOf(state.selectedTrack)
      if (getters.getPaginatedTracks.length > index + 1) {
        dispatch('fetchSelectedTrack', getters.getPaginatedTracks[index + 1])
      } else {
        if (getters.willPaginate) {
          dispatch('nextPage')
          dispatch('fetchSelectedTrack', getters.getPaginatedTracks[0])
        }
      }
    }
  }
}

const getters = {
  getAllTracks (state) {
    return state.searchResult
  },
  getPageNumber (state) {
    return state.pageNumber
  },
  getPageCount (state) {
    return state.searchResult ? Math.ceil(state.searchResult.length / state.itemsPerPage) : 0
  },
  getPaginatedTracks (state) {
    const start = state.pageNumber * state.itemsPerPage
    const end = start + state.itemsPerPage
    return state.searchResult.slice(start, end)
  },
  getSelectedTrack (state) {
    let selectedTrack = null
    let streamUrl = {}
    if (state.selectedTrack) {
      streamUrl = {stream_url_secret: soundCloud.getStreamUrl(state.selectedTrack.id)}
      selectedTrack = Object.assign(state.selectedTrack, streamUrl)
    }
    return selectedTrack
  },
  willPaginate (state, getters) {
    return getters.getPageCount > state.pageNumber + 1
  },
  getPlaybackMode (state) {
    return state.playbackMode
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

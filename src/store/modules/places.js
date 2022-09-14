import axios from '@/axiosConf'

const state = () => ({
  count: 0,
  next: null,
  previous: null,
  results: [],
})

const getters = {
  hasRemaining: function(state) {
    if (state.count > 0 && state.next != null) {
      return true
    }
    return false
  },
}

const mutations = {
  setData: function(state, payload = { append: false, data: {} }) {
    state.count = payload.data.count || 0
    state.next = payload.data.next || null
    state.previous = payload.data.previous || null
    if (payload.append && state.results.length > 0) {
      state.results.concat(payload.data.results || [])
    } else {
      state.results = payload.data.results || []
    }
  },
}

const actions = {
  fetchPlaces: function({ state, getters, commit }, payload = { next: true }) {
    return new Promise((resolve, reject) => {
      const fetchNext = payload.next && getters.hasRemaining
      axios
        .get(fetchNext ? state.next : "/place/")
        .then((resp) => {
          if (resp.status === 200) {
            commit("setData", { append: fetchNext, data: resp.data })
            resolve(resp.data)
          } else {
            reject(resp)
          }
        })
        .catch((error) => {
          reject(error)
        })
        .finally(() => {
          //
        })
    })
  },

  searchPlaces: function({ commit }, payload = { searchTerm: "" }) {
    // do basic sanitization of the search term
    payload.searchTerm = payload.searchTerm.trim().replaceAll(" ", "+")
    return new Promise((resolve, reject) => {
      axios
        .get(`/place/?search=${payload.searchTerm}`)
        .then((resp) => {
          if (resp.status === 200) {
            commit("setData", { append: false, data: resp.data })
            resolve(resp.data)
          } else {
            reject(resp)
          }
        })
        .catch((error) => {
          reject(error)
        })
        .finally(() => {
          //
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

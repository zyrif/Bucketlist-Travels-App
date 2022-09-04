import axios from '@/axiosConf'

const state = () => ({
  user: {
    id: '',
    email: '',
    auth_token: ''
  }
});

const getters = {
  getUserId: function() {
    return this.user.id
  },

  getUserEmail: function() {
    return this.user.email
  }
}

const mutations = {
  setUser: function(state, data) {
    // if data is null, then set props to empty value
    for (let key of Object.keys(state.user)) {
      state.user[key] = ''
    }

    if (data) {
      state.user.id = data.id
      state.user.email = data.email
    }
  },
  setUserAuthToken: function(state, auth_token) {
    state.user.auth_token = auth_token
  }
}

const actions = {
  authenticate: function({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post('/auth/token/login/', {
          email: payload.email,
          password: payload.password
        })
        .then((resp) => {
          if (resp.status === 200) {
            commit('setUserAuthToken', resp.data.auth_token)
            resolve(resp)
          } else {
            reject(resp)
          }
        }).catch((error) => {
          reject(error)
        }).finally(() => {
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


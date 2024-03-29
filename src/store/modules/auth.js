import axios from '@/axiosConf'

const state = () => ({
  user: {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    auth_token: ''
  }
});

const getters = {
  isLoggedIn: function(state) {
    if (state.user.auth_token) {
      axios.defaults.headers.common['Authorization'] = `Token ${state.user.auth_token}`
      return true
    }
    return false
  },

  getUserId: function(state) {
    return state.user.id
  },

  getUserEmail: function(state) {
    return state.user.email
  },

  getUserFullName: function(state) {
    let fullName = ""
    if (state.user.firstName) {
      fullName = state.user.firstName + " "
    }
    if (state.user.lastName) {
      fullName += state.user.lastName
    }
    return fullName
  },

  getUserAlias: function(_, getters) {
    if (!getters.isLoggedIn) return ""

    let alias = getters.getUserFullName
    if (!alias) {
      if (!getters.getUserId || !getters.getUserEmail) return ""

      alias = getters.getUserEmail.split("@")[0]
      alias += `#${getters.getUserId.toString()}`
    }
    return alias
  },

  getUserInitials: function(_, getters) {
    const alias = getters.getUserAlias
    if (!alias) return ""

    const parts = alias.split(" ")
    let initials = parts[0].split("")[0].toUpperCase()
    if (parts.length > 1) {
      initials += parts[1].split("")[0].toUpperCase()
    }

    return initials
  }
}

const mutations = {
  setUser: function(state, data) {
    state.user.id = data.id
    state.user.email = data.email
    state.user.firstName = data.first_name
    state.user.lastName = data.last_name
  },

  setUserAuthToken: function(state, auth_token) {
    state.user.auth_token = auth_token
    axios.defaults.headers.common['Authorization'] = `Token ${auth_token}`
  },

  unsetUser: function(state) {
    for (let key of Object.keys(state.user)) {
      state.user[key] = ''
    }
    axios.defaults.headers.common['Authorization'] = ''
  }
}

const actions = {
  authenticate: function({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post('/auth/token/login/', {
          email: payload.email,
          password: payload.password
        })
        .then((resp) => {
          if (resp.status === 200) {
            commit('setUserAuthToken', resp.data.auth_token)
            dispatch('fetchUserData')
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
  },

  signOut: function({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .post('/auth/token/logout/')
        .then((resp) => {
          console.log(resp)

          if (resp.status === 204) {
            resolve(true)
          } else {
            reject(resp.data)
          }
        })
        .catch((error) => {
          console.debug(error)

          reject(error)
        })
        .finally(() => {
          commit('unsetUser')
          commit('place/setData', undefined, { root: true })
        })
    })
  },

  registerUser: function(_, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post('/auth/users/', {
          'first_name': payload.firstName,
          'last_name': payload.lastName,
          'email': payload.email,
          'password': payload.password,
          're_password': payload.confirmPassword,
        })
        .then((resp) => {
          console.log(resp)

          if (resp.status === 201) {
            resolve(resp.data)
          } else {
            reject(resp.data)
          }
        })
        .catch((error) => {
          console.debug(error)

          reject(error)
        })
    })
  },

  fetchUserData: function({ state, commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get('/auth/users/me/')
        .then((resp) => {
          console.log(resp)

          if (resp.status === 200) {
            commit('setUser', resp.data)
            resolve(state.user)
          } else {
            reject(resp.data)
          }
        })
        .catch((error) => {
          console.debug(error)

          reject(error)
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


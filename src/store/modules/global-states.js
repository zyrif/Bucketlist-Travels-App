const state = () => ({
  messageDialog: {
    open: false,
    resolve: null,
    reject: null,
    width: 400,
    zIndex: 200,
    title: '',
    body: '',
    canChoose: true,
    defaultBtnText: 'Okay',
    cancelBtnText: 'Cancel',
  },

  messageSnackbar: {
    open: false,
    resolve: null,
    reject: null,
    body: "Snackbar wasn't properly opened",
    color: "green lighen-1",
    timeout: "3000",
    actionBtnText: "Dismiss"
  }
})

const getters = {}

const mutations = {
  setMessageDialogValues: function(state, payload = {}) {
    state.messageDialog.open = payload.open || false
    state.messageDialog.resolve = payload.resolve || null
    state.messageDialog.reject = payload.reject || null
    state.messageDialog.width = payload.width || 400
    state.messageDialog.zIndex = payload.zIndex || 200
    state.messageDialog.title = payload.title || ''
    state.messageDialog.body = payload.body || ''
    state.messageDialog.canChoose = payload.canChoose || false
    state.messageDialog.defaultBtnText = payload.defaultBtnText || 'Okay'
    state.messageDialog.cancelBtnText = payload.cancelBtnText || 'Cancel'
  },

  setMessageSnackbarValues: function(state, payload = {}) {
    state.messageSnackbar.open = payload.open || false
    state.messageSnackbar.resolve = payload.resolve || null
    state.messageSnackbar.reject = payload.reject || null
    state.messageSnackbar.body = payload.body || "Snackbar wasn't properly opened"
    state.messageSnackbar.color = payload.color || "green lighen-1"
    state.messageSnackbar.timeout = payload.timeout || "3000"
    state.messageSnackbar.actionBtnText = payload.actionBtnText || "Dismiss"
  }
}

const actions = {
  openMessageDialog: function({ commit }, payload = {}) {
    return new Promise((resolve, reject) => {
      commit('setMessageDialogValues', {
        open: true,
        resolve: resolve,
        reject: reject,
        width: payload.width,
        zIndex: payload.zIndex,
        title: payload.title,
        body: payload.body,
        canChoose: payload.canChoose,
        defaultBtnText: payload.defaultBtnText,
        cancelBtnText: payload.cancelBtnText
      })
    })
  },
  resolveMessageDialog: function({ state, commit }, value = true) {
    state.messageDialog.resolve(value)
    commit('setMessageDialogValues', { open: false })
  },

  openMessageSnackbar: function({ commit }, payload = {}) {
    return new Promise((resolve, reject) => {
      commit("setMessageSnackbarValues", {
        open: true,
        resolve: resolve,
        reject: reject,
        body: payload.body,
        color: payload.color,
        timeout: payload.timeout,
        actionBtnText: payload.actionBtnText
      })
    })
  },
  resolveMessageSnackbar: function({ state, commit }) {
    state.messageSnackbar.resolve(true)
    commit("setMessageSnackbarValues", { open: false })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

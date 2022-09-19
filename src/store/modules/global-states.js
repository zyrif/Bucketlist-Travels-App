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
  }
}

const actions = {
  openMessageDialog: function({ commit }, payload = {}) {
    console.debug(payload)
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

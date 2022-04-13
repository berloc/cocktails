export const mutations = {
  addNotification(state, payload) {
    state.queue.push(payload)
    if (state.queue.length > state.max) {
      state.queue.shift()
    }
  },
}

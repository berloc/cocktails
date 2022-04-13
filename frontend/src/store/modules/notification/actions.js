export const actions = {
  async push(context, payload) {
    context.commit('addNotification', payload)
  },
}

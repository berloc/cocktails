import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'
import { state } from './state'

const namespaced = true

export default (content) => ({
  namespaced,
  state: state(content),
  getters: getters,
  mutations: mutations,
  actions: actions,
})

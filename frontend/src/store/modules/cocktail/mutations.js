import { updateField } from 'vuex-map-fields'

export const mutations = {
  updateField,
  SET_COCKTAIL(state, payload) {
    state.cocktail = payload
  },
}

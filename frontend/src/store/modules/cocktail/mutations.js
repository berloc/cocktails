import { updateField } from 'vuex-map-fields'

export const mutations = {
  updateField,
  setCocktail(state, cocktail) {
    state.cocktail = cocktail
  },
  setCocktails(state, cocktails) {
    state.cocktails = cocktails
  },
  setLoading(state, payload) {
    state.loading = payload
  },
  setMsg(state, message) {
    state.message = message
  },
  resetName(state) {
    state.name = ''
  },
}

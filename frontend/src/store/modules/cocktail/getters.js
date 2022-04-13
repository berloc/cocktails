import { getField } from 'vuex-map-fields'

export const getters = {
  getField,
  loading: (state) => state.loading,
  cocktail: (state) => state.cocktail,
  cocktails: (state) => state.cocktails,
  message: (state) => state.message,
}

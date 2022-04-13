function getIngredients(drink) {
  let drinkEntries = Object.entries(drink)
  return drinkEntries
    .filter(([key, value]) => key.startsWith('strIngredient') && value && value.trim())
    .map(([key, value]) => value)
}

export const actions = {
  async getRandomCocktail({ commit }) {
    try {
      let res = await this.$api.cocktailService.getRandom()
      let drink = res.data.drinks[0]
      drink.ingredients = getIngredients(drink)
      commit('SET_COCKTAIL', drink)
    } catch (e) {}
  },
}

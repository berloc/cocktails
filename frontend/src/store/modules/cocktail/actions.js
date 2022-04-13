import { getKeyAsList } from '@/util/getObjectKeyAsList'
import Notification from '@/model/Notification'

export const actions = {
  async getRandomCocktail({ commit, dispatch }) {
    try {
      commit('setMsg', '')
      commit('setCocktails', [])
      commit('setLoading', true)
      let res = await this.$api.cocktailService.getRandom()
      let drink = res.data.drinks[0]
      drink.ingredients = getKeyAsList(drink, 'strIngredient')
      commit('setCocktail', drink)
    } catch (e) {
      dispatch('notification/push', new Notification('error', 'Error', 'An error occurred during the api call'), {
        root: true,
      })
    } finally {
      commit('setLoading', false)
    }
  },

  async getCocktailByName({ commit, state, dispatch }) {
    try {
      commit('setMsg', '')
      commit('setLoading', true)
      let res = await this.$api.cocktailService.getByName(state.name)
      if (res.data.drinks === null) {
        commit('setMsg', 'There is no cocktail with the following name')
      } else if (res.data.drinks.length > 1) {
        commit('setCocktails', res.data.drinks)
        commit('setMsg', 'There are many cocktails with this name, please click on of them')
      } else if (res.data.drinks.length === 1) {
        let drink = res.data.drinks[0]
        drink.ingredients = getKeyAsList(drink, 'strIngredient')
        commit('setCocktail', drink)
      }
    } catch (e) {
      dispatch('notification/push', new Notification('error', 'Error', 'An error occurred during the api call'), {
        root: true,
      })
    } finally {
      commit('setLoading', false)
    }
  },

  setCocktail({ commit }, cocktail) {
    let drink = JSON.parse(JSON.stringify(cocktail))
    drink.ingredients = getKeyAsList(drink, 'strIngredient')
    commit('setCocktail', drink)
    commit('setMsg', '')
    commit('resetName')
    commit('setCocktails', [])
  },
}

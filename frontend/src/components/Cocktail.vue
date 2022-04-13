<template>
  <v-row justify="center">
    <v-col col="12" sm="6" md="4">
      <v-img width="350" height="350" :src="cocktail.strDrinkThumb"></v-img>
    </v-col>
    <v-col cols="12" sm="6" md="8">
      <span class="text-md-h5 text-sm-h6 font-weight-bold" v-html="cocktail.strDrink" />
      <div class="text-h6">Ingredients:</div>
      <v-list density="compact">
        <v-list-item v-for="(ingredient, i) in cocktail.ingredients" :key="i">
          {{ ingredient }}
        </v-list-item>
      </v-list>
      <div class="text-h6">Instructions:</div>
      <p v-html="cocktail.strInstructions" />
      <v-btn class="text-none mt-3" @click="getAnotherCocktail">Give another random cocktail</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'Cocktail',
  props: ['cocktail'],
  setup() {
    const store = useStore()
    const loading = computed(() => store.getters['cocktail/loading'])
    const getAnotherCocktail = () => store.dispatch('cocktail/getRandomCocktail')

    return { getAnotherCocktail, loading }
  },
}
</script>

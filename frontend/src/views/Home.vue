<template>
  <v-container>
    <v-row justify="center">
      <div class="text-h4 text-xs-h6 mt-5 mb-8">My Fancy cocktail app</div>
    </v-row>
    <v-row>
      <v-col cols="12">
        <cocktail :cocktail="cocktail"></cocktail>
      </v-col>
    </v-row>
    <cocktail-finder />
  </v-container>
</template>

<script>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

import Cocktail from '@/components/Cocktail'
import CocktailFinder from '@/components/CocktailFinder'

export default defineComponent({
  name: 'HomeView',
  components: { CocktailFinder, Cocktail },
  setup() {
    const store = useStore()
    const cocktail = computed(() => store.getters['cocktail/cocktail'])

    store.dispatch('cocktail/getRandomCocktail')
    return { cocktail }
  },
})
</script>

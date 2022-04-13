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
  </v-container>
</template>

<script>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

import Cocktail from '@/components/Cocktail'

export default defineComponent({
  name: 'HomeView',
  components: { Cocktail },
  setup() {
    const store = useStore()
    const cocktail = computed(() => store.getters['cocktail/cocktail'])
    const loading = computed(() => store.getters['cocktail/loading'])

    store.dispatch('cocktail/getRandomCocktail')
    return { cocktail, loading }
  },
})
</script>

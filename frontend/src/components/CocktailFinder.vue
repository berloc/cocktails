<template>
  <v-row>
    <div class="text-h5 text-xs-h6 mt-12 mb-5">Search cocktail by name</div>
    <v-col cols="12">
      <v-text-field label="Name" variant="outlined" v-model="name" />
      <v-btn class="text-none" @click="search" :disabled="name === ''">Search</v-btn>
    </v-col>
  </v-row>
  <div class="mt-3" v-if="!!message" v-html="message" />
  <v-list>
    <v-list-item v-for="(cocktail, i) in cocktails" :key="i" @click="setCocktail(cocktail)">
      {{ cocktail.strDrink }}
    </v-list-item>
  </v-list>
</template>

<script>
import { defineComponent } from 'vue'
import { createHelpers } from 'vuex-map-fields'
import { computed } from 'vue'
import { useStore } from 'vuex'

const { mapFields } = createHelpers({
  getterType: 'cocktail/getField',
  mutationType: 'cocktail/updateField',
})

export default defineComponent({
  name: 'CocktailFinder',
  setup() {
    const store = useStore()
    const loading = computed(() => store.getters['cocktail/loading'])
    const message = computed(() => store.getters['cocktail/message'])
    const cocktails = computed(() => store.getters['cocktail/cocktails'])
    const search = () => store.dispatch('cocktail/getCocktailByName')
    const setCocktail = (cocktail) => store.dispatch('cocktail/setCocktail', cocktail)

    return { loading, message, cocktails, search, setCocktail }
  },
  computed: {
    ...mapFields(['name']),
  },
})
</script>

<style scoped></style>

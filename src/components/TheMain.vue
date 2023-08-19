<script setup>
import TheCharactersList from '@/components/TheCharactersList.vue';
import TheTools from '@/components/TheTools.vue';
import VueLoader from '@/components/icons/VueLoaderMorty.vue';

import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCharactersStore } from '@/store/app'
import UiSelect from './ui/UiSelect.vue';

const store = useCharactersStore()
const route = useRoute()

onMounted(() => {
  const queryParameters = route.query
  store.fetchQuery.page = parseInt(queryParameters.page) || 1
  store.fetchQuery.name = queryParameters.name || ''
  store.fetchQuery.species = queryParameters.species || ''
  store.getCharacters()
  store.setFavoritesData()
})

</script>

<template>
    <v-main class="bg-space">
      <v-container>
        <the-tools />
        <ui-select />
        <the-characters-list v-if="!store.isLoading" :characters="store.characters"/>
        <vue-loader spin class="mx-auto" v-else/>
      </v-container>
    </v-main>
</template>
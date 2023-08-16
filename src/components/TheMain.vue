<script setup>
import TheCharactersList from '@/components/TheCharactersList.vue';
import TheTools from '@/components/TheTools.vue';
import VueLoader from './icons/VueLoaderMorty.vue';

import { onMounted } from 'vue'
import { useCharactersStore } from '@/store/app'

const store = useCharactersStore()
const { getCharacters, setFavoritesData } = useCharactersStore()

onMounted(() => {
  getCharacters()
  setFavoritesData()
})

</script>

<template>
    <v-main class="bg-space">
      <v-container>
        <the-tools />
        <the-characters-list v-if="!store.isLoading" :characters="store.characters"/>
        <vue-loader spin class="mx-auto" v-else/>
      </v-container>
    </v-main>
</template>
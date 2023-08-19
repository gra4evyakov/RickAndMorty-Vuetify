<script setup>
import { onMounted } from 'vue';
import TheCharactersList from '@/components/TheCharactersList.vue';
import VueLoader from '@/components/icons/VueLoaderRick.vue'
import { useCharactersStore } from '@/store/app';

const store = useCharactersStore()

onMounted(() => {
  store.setFavoritesData()
})

</script>

<template>
    <v-main class="bg-space">
      <v-container>
        <the-characters-list v-if="store.favorites.length" :characters="store.favorites"/>
        <template v-else>
            <vue-loader class="mx-auto"/>
            <h3 class="text-center">The favorites list is empty</h3>
        </template>
      </v-container>
    </v-main>
</template>
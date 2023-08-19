<script setup>
import { computed } from 'vue';
import { useCharactersStore } from '@/store/app';

import UiButton from './UiButton.vue';

const props = defineProps({
    character: Object
})
const emits = defineEmits(['add-to-favorites', 'remove-to-favorites'])

const store = useCharactersStore()
const isFavorite = computed(() => store.favorites.some((item) => item.id === props.character.id))

const toggleFavorites = () => {
    if (isFavorite.value) {
        store.removeToFavorites(props.character.id);
    } else {
        store.addToFavorites(props.character);
    }
};
</script>

<template>
    <v-card>
        <v-img
            :src="props.character.image"
            class="align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="250px"
            cover
        >
            <v-card-title class="text-white" v-text="props.character.name"></v-card-title>
            <ui-button :is-favorite="isFavorite" @click="toggleFavorites"/>
        </v-img>
    </v-card>
</template>
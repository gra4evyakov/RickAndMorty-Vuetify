<script setup>
import { computed } from 'vue';
import { useCharactersStore } from '@/store/app';

import UiButton from './UiButton.vue';

const props = defineProps({
    character: Object
})
const emits = defineEmits(['add-to-favorites', 'remove-to-favorites'])

const store = useCharactersStore()
const isFavorites = computed(() => store.favorites.some((item) => item.id === props.character.id))

const addToFavorites = () => {
    emits('add-to-favorites', props.character)
}
const removeToFavorites = () => {
    emits('remove-to-favorites', props.character.id)
}
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
            <ui-button v-if="isFavorites" is-favorite @click="removeToFavorites"/>
            <ui-button v-else @click="addToFavorites"/>
        </v-img>
    </v-card>
</template>
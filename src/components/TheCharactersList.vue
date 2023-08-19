<script setup>
import UiCard from '@/components/ui/UiCard.vue';
import { useCharactersStore } from '@/store/app';

const { removeToFavorites, addToFavorites } = useCharactersStore()
const props = defineProps({
    characters: Array
})

</script>

<template>
    <v-row>
        <v-col
            v-for="character in props.characters"
            cols="12"
            lg="3"
            md="4"
            sm="6"
            :key="character.id"
        >
            <ui-card :character="character" @add-to-favorites="addToFavorites" @remove-to-favorites="removeToFavorites"/>
        </v-col>
    </v-row>
</template>
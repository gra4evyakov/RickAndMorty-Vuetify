<script setup>
import { useCharactersStore } from '@/store/app';

const store = useCharactersStore()
</script>

<template>
    <v-row class="justify-center">
        <v-col sm="6">
            <v-select
                v-model="store.fetchQuery.species"
                density="compact"
                label="Select"
                :items="store.filters"
                variant="solo-filled"
            />
        </v-col>
    </v-row>
</template>
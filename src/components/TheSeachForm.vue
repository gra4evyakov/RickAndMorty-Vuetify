<script setup>
import { ref } from 'vue';

const searchValue = ref('')

const emits = defineEmits(['searchCharacters'])
const searchCharacters = (value) => {
  emits('searchCharacters', value)
}
</script>

<template>
    <v-form @submit.prevent="searchCharacters(searchValue)">
        <v-responsive
            class="mx-auto"
            min-width="150"
        >
            <v-text-field
                v-model="searchValue"
                prepend-inner-icon="mdi-magnify"
                density="compact"
                variant="solo"
                label="Search"
                single-line
                hide-details
            />
        </v-responsive>
    </v-form>
</template>
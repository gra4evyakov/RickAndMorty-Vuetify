<script setup>
import { watch } from 'vue';
import { useCharactersStore } from '@/store/app'

const store = useCharactersStore()
const emits = defineEmits(['setCurrentPage'])

watch(store.fetchQuery, store.editCurrentPage)
</script>

<template>
    <v-pagination
        v-model="store.fetchQuery.page"
        class="my-4"
        :length="store.pages"
        total-visible="4"
        rounded="circle"
        size="small"
    />
</template>
<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    length: Number
})
const emits = defineEmits(['setCurrentPage'])

const pageNumber = ref(1)
const setCurrentPage = (pageNumber) => {
    emits('setCurrentPage', pageNumber)
}

watch(pageNumber, () => {
    setCurrentPage(pageNumber.value)
})
</script>

<template>
    <v-pagination
        v-model="pageNumber"
        class="my-4"
        :length="props.length"
        total-visible="4"
        rounded="circle"
        size="small"
    />
</template>
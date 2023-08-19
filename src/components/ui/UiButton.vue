<script setup>
const props = defineProps({
    isFavorite: Boolean
})
</script>

<template>
    <v-btn :class="isFavorite ? 'red' : 'green'" color="white" variant="tonal" block>
        {{ props.isFavorite ? 'Remove from favorites' : 'Add to favorites' }}
    </v-btn>
</template>

<style scoped>
.green:hover {
    background-color: rgba(0, 128, 0, 0.474);
}

.red:hover {
    background-color: rgba(128, 0, 0, 0.474);
}
</style>
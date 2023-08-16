<script setup>
const props = defineProps({
    title: String,
    links: Object
})
</script>

<template>
    <v-app-bar class="bg-space px-5" density="comfortable">
        <v-app-bar-title>{{ props.title }}</v-app-bar-title>
        <div class="d-flex gap-2">
            <router-link v-for="link in props.links" class="mx-2 text-white text-decoration-none" :to="link.href">{{ link.title }}</router-link>
        </div>
    </v-app-bar>
</template>
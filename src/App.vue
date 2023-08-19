<script setup>
import TheHeader from '@/components/TheHeader.vue'

const links = [
  {
    title: 'Main', href: '/'
  },
  {
    title: 'Favorites', href: '/favorites' 
  }
]
</script>

<template>
  <v-app id="inspire">
    <TheHeader title="Rick and Morty" :links="links"/>
    <router-view />
  </v-app>
</template>


<script setup>
import TheHeader from '@/components/TheHeader.vue'

const links = [
  {
    title: 'Main', href: '/'
  },
  {
    title: 'favorites', href: '/favorites' 
  }
]
</script>

<template>
  <v-app id="inspire">
    <the-header title="Rick and Morty" :links="links"/>
    <router-view />
  </v-app>
</template>


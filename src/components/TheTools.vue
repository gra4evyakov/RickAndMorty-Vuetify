<script setup>
import ThePagination from '@/components/ThePagination.vue';
import TheSearchForm from '@/components/TheSeachForm.vue'

import { useCharactersStore } from '@/store/app';
const store = useCharactersStore()

</script>

<template>
    <v-row class="d-flex justify-center">
        <v-col sm="6">
            <the-search-form @search-characters="store.editSearch"/>
        </v-col>
        <v-col sm="12">
            <the-pagination :length="store.pages" @set-current-page="store.editCurrentPage"/>
        </v-col>
    </v-row>
</template>
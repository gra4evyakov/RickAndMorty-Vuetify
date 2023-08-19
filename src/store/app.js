import { defineStore } from 'pinia'
import { ref, computed, watchEffect } from 'vue'

import { useGetCharacters } from '@/api/requests'
import router from '@/router'

export const useCharactersStore = defineStore('characters', () => {
  const fetchQuery = ref({
    page: 1,
    name: '',
    species: ''
  })

  const favorites = ref([])
  const filters = ['All', 'Human', 'Animal', 'Alien']

  const { data, isLoading, isError, execute } = useGetCharacters()
  const characters = computed(() => data?.value?.results)
  const pages = computed(() => data?.value?.info?.pages || 1)

  const currentFitlter = ref('All')

  function updateFavorites() {
    localStorage.setItem('favoritesList', JSON.stringify(favorites.value));
  }

  async function getCharacters() {
    fetchQuery.value.species = fetchQuery.value.species === 'All' ? '' : fetchQuery.value.species
    await execute(fetchQuery.value)
    router.push({query: fetchQuery.value})
  }

  function addToFavorites(card) {
    favorites.value.push(card)
    updateFavourites()
  }

  function removeToFavorites(id) {
    favorites.value = favorites.value.filter((card) => card.id != id)
    updateFavourites()
  }

  function setFavoritesData() {
    const localFavourites = localStorage.getItem('favouritesList')
    if (localFavourites) {
      favorites.value = JSON.parse(localFavourites)
    }
  }
  
  function updateFavourites() {
    localStorage.setItem('favouritesList', JSON.stringify(favorites.value))
  }

  function editSearch(value) {
    fetchQuery.value.name = value
    getCharacters()
  }

  function editCurrentPage() {
    getCharacters()
  }

  watchEffect(fetchQuery.value.species, getCharacters())

  return {
    characters,
    pages,
    favorites,
    filters,
    currentFitlter,
    isLoading,
    isError,
    fetchQuery,
    getCharacters,
    addToFavorites,
    removeToFavorites,
    editSearch,
    setFavoritesData,
    editCurrentPage
  }
})

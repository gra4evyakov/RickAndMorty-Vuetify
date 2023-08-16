// Utilities
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import { useGetCharacters } from '@/api/requests'

export const useCharactersStore = defineStore('characters', () => {
  const currentFilter = ref('')
  const currentSearch = ref('')
  const currentPage = ref(1)
  const favorites = ref([])
  const { data, isLoading, isError, execute } = useGetCharacters()

  const characters = computed(() => data?.value?.results)
  const pages = computed(() => data?.value?.info?.pages || 1)

  async function getCharacters() {
    currentFilter.value = currentFilter.value === 'All' ? '' : currentFilter.value
    await execute({
      page: currentPage.value,
      name: currentSearch.value,
      species: currentFilter.value
    })
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
    currentSearch.value = value
    getCharacters()
  }

  function editCurrentPage(page) {
    currentPage.value = page
    getCharacters()
  }

  return {
    characters,
    pages,
    favorites,
    isLoading,
    isError,
    currentFilter,
    currentSearch,
    getCharacters,
    addToFavorites,
    removeToFavorites,
    editSearch,
    setFavoritesData,
    editCurrentPage
  }
})

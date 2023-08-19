// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    name: 'Favorites',
    path: '/favorites',
    component: () => import('@/views/Favorites.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router

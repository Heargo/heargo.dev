import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/unavailable',
    name: 'Unavailable',
    component: () => import('@/views/UnavailableView.vue')
  },
  {
    path: '/project/:id',
    name: 'CaseStudy',
    component: () => import('@/views/CaseStudy.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

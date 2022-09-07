import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/caseStudy',
    name: 'CaseStudy',
    component: () => import('@/views/CaseStudy.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

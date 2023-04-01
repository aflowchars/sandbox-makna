import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/+page.vue')
    },
    {
      path: '/button',
      name: 'Button',
      component: () => import('@/views/button/+page.vue')
    },
    {
      path: '/modal',
      name: 'Modal',
      component: () => import('@/views/modal/+page.vue')
    }
  ]
})

export default router
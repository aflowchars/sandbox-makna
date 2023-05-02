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
      path: '/input',
      name: 'Input',
      component: () => import('@/views/input/+page.vue')
    },
    {
      path: '/modal',
      name: 'Modal',
      component: () => import('@/views/modal/+page.vue')
    },
    {
      path: '/chart',
      name: 'Chart',
      component: () => import('@/views/chart/+page.vue')
    },
    {
      path: '/loader',
      name: 'Loader',
      component: () => import('@/views/loader/+page.vue')
    },
    {
      path: '/loader-full',
      name: 'Loader Full',
      component: () => import('@/views/loader-full/+page.vue')
    },
    {
      path: '/datepicker',
      name: 'Datepicker',
      component: () => import('@/views/datepicker/+page.vue')
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: () => import('@/views/calendar/+page.vue')
    }
  ]
})

export default router

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Fixing',
    component: () => import(
      /* webpackChunkName: "fixing" */
      /* webpackPrefetch: true */
      '@/pages/Fixing.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

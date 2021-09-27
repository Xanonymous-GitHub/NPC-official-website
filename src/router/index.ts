import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {path: "/:any", component: () => import('@/pages/NotFound.vue')},
  {
    path: '/',
    name: 'Home',
    component: () => import(
      /* webpackChunkName: "Home" */
      /* webpackPrefetch: true */
      '@/pages/Home.vue'
      ),
  },
  // {
  //   path: '/welcome',
  //   name: 'Welcome',
  //   component: () => import(
  //     /* webpackChunkName: "Welcome" */
  //     /* webpackPrefetch: true */
  //     '@/pages/Welcome.vue'
  //     )
  // },
  // {
  //   path: '/imgur',
  //   name: 'UploadImg',
  //   component: () => import(
  //     /* webpackChunkName: "UploadImg" */
  //     /* webpackPrefetch: true */
  //     '@/pages/UploadImg.vue'
  //     )
  // },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import(
  //     /* webpackChunkName: "Login" */
  //     /* webpackPrefetch: true */
  //     '@/pages/Login.vue'
  //     )
  // },
  // {
  //   path: '/dashboard',
  //   name: 'DashBoard',
  //   component: () => import(
  //     /* webpackChunkName: "DashBoard" */
  //     /* webpackPrefetch: true */
  //     '@/pages/DashBoard.vue'
  //     )
  // },
  // {
  //   path: '/registration',
  //   name: 'Registration',
  //   component: () => import(
  //     /* webpackChunkName: "Registration" */
  //     /* webpackPrefetch: true */
  //     '@/pages/Registration.vue'
  //     )
  // },
  // {
  //   path: '/admin',
  //   name: 'Admin',
  //   component: () => import(
  //     /* webpackChunkName: "Admin" */
  //     /* webpackPrefetch: true */
  //     '@/pages/Admin.vue'
  //     )
  // },
  // {
  //   path: '/fixing',
  //   name: 'Fixing',
  //   component: () => import(
  //     /* webpackChunkName: "Fixing" */
  //     /* webpackPrefetch: true */
  //     '@/pages/Fixing.vue'
  //     )
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

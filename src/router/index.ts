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
  {
    path: '/github',
    beforeEnter() {
      const newWindow = open('','') as Window
      (newWindow as Window).location.href = 'https://github.com/NTUT-NPC'
    },
    redirect: ''
  },
  {
    path: '/chat-on-line',
    beforeEnter() {
      const newWindow = open() as Window
      (newWindow as Window).location.href = 'https://m.me/NPC.OwO'
    },
    redirect: ''
  },
  {
    path: '/facebook',
    beforeEnter() {
      const newWindow = open() as Window
      (newWindow as Window).location.href = 'https://facebook.com/NPC.OwO'
    },
    redirect: ''
  },
  {
    path: '/instagram',
    beforeEnter() {
      const newWindow = open() as Window
      (newWindow as Window).location.href = 'https://instagram.com/npc.designer'
    },
    redirect: ''
  },
  {
    path: '/youtube',
    beforeEnter() {
      const newWindow = open() as Window
      (newWindow as Window).location.href = 'https://youtube.com/channel/UCzYSXfm15W7QNkomC6lLXxg'
    },
    redirect: ''
  },
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
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import(
  //     /* webpackChunkName: "Login" */
  //     /* webpackPrefetch: true */
  //     '@/pages/Login.vue'
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

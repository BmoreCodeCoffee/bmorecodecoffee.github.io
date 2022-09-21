import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/code-of-conduct',
      name: 'code-of-conduct',
      component: () => import('../views/CodeOfConduct.vue'),
    },
    {
      path: '/anonymous-report',
      name: 'report',
      component: () => import('../views/AnonymousReport.vue'),
    }
  ]
})

export default router

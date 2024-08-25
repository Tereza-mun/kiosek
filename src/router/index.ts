import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/detail-schuzky',
      name: 'meetingDetail',
      component: () => import('../views/MeetingDetail.vue')
    }
  ]
})

export default router

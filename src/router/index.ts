import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/KiosekHomepage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/zadani-cisla',
      name: 'meetingSearch',
      component: () => import('../views/MeetingSearch.vue')
    },
    {
      path: '/zadani-kontaktu',
      name: 'contactSearch',
      component: () => import('../views/ContactSearch.vue')
    },
    {
      path: '/detail-schuzky',
      name: 'meetingDetail',
      component: () => import('../views/MeetingDetail.vue')
    },
    {
      path: '/kontaktni-udaje',
      name: 'contactDetail',
      component: () => import('../views/ContactDetail.vue')
    },
    {
      path: '/schuzka-nenalezena',
      name: 'meetingNotFound',
      component: () => import('../views/MeetingNotFound.vue')
    },
    {
      path: '/kontakt-nenalezen',
      name: 'contactNotFound',
      component: () => import('../views/ContactNotFound.vue')
    },
  ]
})

export default router

import Routing from './index.vue'

export const routes = [
   {
      path: '/',
      name: 'home',
      meta: { layout: 'main' },
      component: () => import('@/pages/home-page/HomePage.vue')
   },
   {
      path: '/about-cinema',
      name: 'about-cinema',
      meta: { layout: 'main' },
      component: () => import('@/pages/about-cinema/AboutCinema.vue')
   },
   {
      path: '/all-films',
      name: 'all-films',
      meta: { layout: 'main' },
      component: () => import('@/pages/all-films/AllFilms.vue')
   },
   {
      path: '/login',
      name: 'login',
      component: () => import('../pages/LoginPage.vue')
   }
]

export { Routing }
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Index'),
    meta: {
      title: 'home',
      key: 1
    }
  },
  {
    path: '/place',
    name: 'Place',
    component: () => import('@/views/Place'),
    meta: {
      title: 'place',
      key: 2
    }
  },
  {
    path: '/booking',
    name: 'Booking',
    component: () => import('@/views/Booking'),
    meta: {
      title: 'booking',
      key: 3
    }
  },
  {
    path: '/popular',
    name: 'Popular',
    component: () => import('@/views/popular/Index'),
    meta: {
      title: 'popular',
      key: 3
    }
  },
  {
    path: '/popular-card',
    name: 'PopularCard',
    component: () => import('@/views/popular/PopularCard'),
    meta: {
      title: 'PopularCard',
      key: 4
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/profile/Index'),
    meta: {
      title: 'Profile',
      key: 5
    }
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: () => import('@/views/profile/Reservation'),
    meta: {
      title: 'Reservation',
      key: 6
    }
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('@/views/profile/Create'),
    meta: {
      title: 'Create',
      key: 7
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
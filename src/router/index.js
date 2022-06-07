// import Vue from 'vue';
// import Router from 'vue-router';
import {
  createRouter,
  createWebHistory
} from 'vue-router'
// Vue.use(Router);
const routes = [{
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
    },
    children: [{
        path: 'reservation',
        name: 'Reservation',
        component: () => import('@/views/profile/Reservation'),
      },
      {
        path: 'added',
        name: 'Added',
        component: () => import('@/views/profile/Added'),
      },
    ]
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('@/views/profile/Create'),
  },
  {
    path: '/ccc',
    name: 'ccc',
    component: () => import('@/components/create/Index'),
  },
  // {
    // path: "/:catchAll(.*)",
    // component: NotFound,
  // },



  // {
  //   path: '/reservation',
  //   name: 'Reservation',
  //   component: () => import('@/views/profile/Reservation'),
  //   meta: {
  //     title: 'Reservation',
  //     key: 6
  //   }
  // },
  // {
  //   path: '/create',
  //   name: 'Create',
  //   component: () => import('@/views/profile/Create'),
  //   meta: {
  //     title: 'Create',
  //     key: 7
  //   }
  // },
  // {
  //   path: '/added',
  //   name: 'Added',
  //   component: () => import('@/views/profile/Added'),
  //   meta: {
  //     title: 'Added',
  //     key: 8
  //   }
  // },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('@/views/Terms'),
    meta: {
      title: 'Terms',
      key: 9
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About'),
    meta: {
      title: 'About',
      key: 9
    }
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('@/views/Contacts'),
    meta: {
      title: 'Contacts',
      key: 9
    }
  },
  {
    path: '/authorization',
    name: 'Authorization',
    component: () => import('@/views/Authorization'),
    meta: {
      title: 'Authorization',
      key: 10
    }
  },
  {
    path: '/found',
    name: 'Found',
    component: () => import('@/views/Found'),
    meta: {
      title: 'Found',
      key: 11
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {
      top: 0
    }
  },

})

// router.afterEach((to) => {
//   Vue.nextTick(() => {
//     document.title = to.meta.title;
//   })
// });

export default router
import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/stores/userStore";
import { useApi } from "@/composables/useApi";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Index.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("@/views/Search.vue"),
  },
  
  {
    path: "/hotel/:id?",
    name: "Hotel",
    component: () => import("@/views/Hotel.vue"),
    props: true,
  },
  {
    path: "/booking/:id?",
    name: "Booking",
    component: () => import("@/views/Booking.vue"),
    props: true,
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/profile/Profile.vue"),
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/create",
    name: "CreateHotel",
    component: () => import("@/views/profile/UpsertHotel.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/edit/:id",
    name: "UpsertHotel",
    component: () => import("@/views/profile/UpsertHotel.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/reservation/:id?",
    name: "Reservation",
    component: () => import("@/views/Reservation.vue"),
    props: true,
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/added",
    name: "Added",
    component: () => import("@/views/profile/Added.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/rules",
    name: "Rules",
    component: () => import("@/views/terms/Rules.vue"),
  },
  {
    path: "/politics",
    name: "Politics",
    component: () => import("@/views/terms/Politics.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("@/views/Contacts.vue"),
  },
  {
    path: "/authorization",
    name: "Authorization",
    component: () => import("@/views/Authorization.vue"),
  },

  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: () => import("@/views/Index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const toHome = { name: "Home" };

  if (requiresAuth && !userStore.isUserAuth) {
    useApi()
      .getProfile()
      .then(() => next())
      .catch(() => next(toHome));
  } else {
    next();
  }
});

export default router;

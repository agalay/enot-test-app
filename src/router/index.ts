import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/404",
      name: "404",
      component: () => import("../views/404.vue"),
    },
    {
      path: "/peoples",
      name: "peoples",
      component: () => import("../views/Peoples/PeoplesView.vue"),
    },
    {
      path: "/peoples/:id",
      name: "peoples.show",
      component: () => import("../views/Peoples/UserView.vue"),
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => import("../views/FavoritesView.vue"),
    },
  ],
});

export default router;

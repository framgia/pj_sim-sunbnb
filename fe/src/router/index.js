import { createRouter, createWebHistory } from "vue-router";

import AllComponents from "../pages/AllComponents.vue";
import Login from "../pages/LogIn.vue";

const routes = [
  {
    path: "/",
    component: AllComponents,
  },
  {
    path: "/login",
    component: Login,
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

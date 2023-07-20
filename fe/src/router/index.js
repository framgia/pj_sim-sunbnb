import { createRouter, createWebHistory } from "vue-router";

import HelloWorld from "../pages/HelloWorld.vue";

const routes = [
  {
    path: "/",
    component: HelloWorld,
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

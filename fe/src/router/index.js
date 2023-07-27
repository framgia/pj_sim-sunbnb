import { createRouter, createWebHistory } from "vue-router";

import HelloWorld from "../pages/HelloWorld.vue";
import Registration from '../pages/RegistrationView.vue';
import Login from "../pages/LogIn.vue";

const routes = [
  {
    path: "/",
    component: HelloWorld,
  },
  {
    path: "/registration",
    component: Registration,
  },
  {
    path: "/Login",
    component: Login,
  },

  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

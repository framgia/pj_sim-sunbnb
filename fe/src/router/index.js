import { createRouter, createWebHistory } from "vue-router";

import AllComponents from "../pages/AllComponents.vue";
import Registration from "../pages/RegistrationView.vue";
import Login from "../pages/LogIn.vue";
import ClientViewProfile from "../pages/ClientViewProfile.vue";

const routes = [
  {
    path: "/",
    component: AllComponents,
  },
  {
    path: "/registration",
    component: Registration,
  },
  {
    path: "/login",
    component: Login,
  },
   
  {
    path: "/clientViewProfile",
    component: ClientViewProfile,
  }


  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

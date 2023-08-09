import { createRouter, createWebHistory } from "vue-router";
import AllComponents from "../pages/AllComponents.vue";
import Login from "../pages/LogIn.vue";
import EditProfile from "../pages/EditProfile.vue";

const routes = [
  {
    path: "/",
    component: AllComponents,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/EditProfile",
    component: EditProfile,
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

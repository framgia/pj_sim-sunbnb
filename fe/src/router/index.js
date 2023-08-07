import { createRouter, createWebHistory } from "vue-router";
import AllComponents from "../pages/AllComponents.vue";
import Registration from "../pages/RegistrationView.vue";
import EditProfile from "../pages/EditProfile.vue";
import AddNewListing from "../pages/AddNewListingView.vue";
import Login from "../pages/LogIn.vue";
import Home from "../pages/HomeView.vue";
import HostViewProfile from "../pages/HostViewProfile.vue";
import ClientViewProfile from "../pages/ClientViewProfile.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/allcomponents",
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
    path: "/editprofile",
    component: EditProfile,
  },
  {
    path: "/AddListing",
    component: AddNewListing,
  },
  {
    path: "/host/profile",
    component: HostViewProfile,
  },
  {
    path: "/client/profile",
    component: ClientViewProfile,
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

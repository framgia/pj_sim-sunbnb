import { createRouter, createWebHistory } from "vue-router";
import AllComponents from "../pages/AllComponents.vue";
import Registration from "../pages/RegistrationView.vue";
import EditProfile from "../pages/EditProfile.vue";
import AddNewListing from "../pages/AddNewListingView.vue";
import Login from "../pages/LogIn.vue";
import Home from "../pages/HomeView.vue";
import HostViewProfile from "../pages/HostViewProfile.vue";
import ClientViewProfile from "../pages/ClientViewProfile.vue";
import Search from "../pages/SearchView.vue";
import RoomPage from "../pages/RoomPage.vue"

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/all-components",
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
    path: "/edit-profile",
    component: EditProfile,
  },
  {
    path: "/add-listing",
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
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/room",
    component: RoomPage,
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

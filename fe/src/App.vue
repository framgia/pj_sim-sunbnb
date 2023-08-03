<template>
  <v-app>
    <v-main>
      <NavBar />
      <HomepageBanner />
      <router-view />
      <Reservation/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/Navbar";
import Reservation from "./components/ReservationComponent.vue"
import HomepageBanner from "./components/HomepageBanner";
export default {
  name: "App",
  components: {
    NavBar,
    Reservation,
};

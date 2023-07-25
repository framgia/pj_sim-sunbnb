<template>
  <v-app>
    <v-main>
      <NavBar />
      <router-view />
      <Reservation/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/Navbar";
import Reservation from "./components/BookingForm.vue"
export default {
  name: "App",
  components: {
    NavBar,
    Reservation,
  },
};
</script>

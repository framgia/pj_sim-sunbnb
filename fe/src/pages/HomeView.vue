<template>
  <div class="home-view">
    <HomepageBanner />
    <div class="divider"></div>
    <!-- TODO: Add listing item component here once merged -->
    <h2>Cities</h2>
    <CityCard />
  </div>
</template>

<script>
import HomepageBanner from "../components/HomepageBanner.vue";
import CityCard from "../components/Cities/CityCard.vue";
export default {
  name: "HomeView",
  components: {
    HomepageBanner,
    CityCard,
  },
};
</script>

<style></style>

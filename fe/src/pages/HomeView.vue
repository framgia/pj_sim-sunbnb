<template>
  <div class="home-view">
    <HomepageBanner />
    <div class="divider"></div>
    <h2>Homes</h2>
    <ListingsList />
    <div class="divider"></div>
    <h2>Cities</h2>
    <CityCard />
  </div>
</template>

<script>
import HomepageBanner from "../components/HomepageBanner.vue";
import CityCard from "../components/Cities/CityCard.vue";
import ListingsList from "../components/ListingsList.vue";
export default {
  name: "HomeView",
  components: {
    HomepageBanner,
    CityCard,
    ListingsList,
  },
};
</script>

<style></style>

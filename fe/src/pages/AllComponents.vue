<template>
  <div>
    <HomepageBanner />
    <Reservation />
    <ReviewForm />
    <ReviewRoom />
    <ReviewHost />
    <Filter />
    <CityCard />
    <HostTab />
    <ListingTab />
    <Listings />
  </div>
</template>

<script>
import Reservation from "../components/ReservationComponent.vue";
import HomepageBanner from "../components/HomepageBanner.vue";
import ReviewForm from "../components/Review/ReviewForm.vue";
import ReviewRoom from "../components/Review/ReviewRoom.vue";
import ReviewHost from "../components/Review/ReviewHost.vue";
import Filter from "../components/filter";
import HostTab from "../components/Tab/HostTab.vue";
import ListingTab from "../components/Tab/ListingTab.vue";
import Listings from "../components/ListingsList.vue";
import CityCard from "../components/Cities/CityCard.vue";
export default {
  name: "AllComponents",
  components: {
    Reservation,
    HomepageBanner,
    ReviewForm,
    ReviewRoom,
    ReviewHost,
    Filter,
    CityCard,
    HostTab,
    ListingTab,
    Listings,
  },
};
</script>

<style></style>

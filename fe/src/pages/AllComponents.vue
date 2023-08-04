<template>
  <div>
    <HomepageBanner />
    <Reservation />
    <ReviewForm />
    <ReviewRoom />
    <ReviewHost />
    <CityCard />
  </div>
</template>

<script>
import Reservation from "../components/ReservationComponent.vue";
import HomepageBanner from "../components/HomepageBanner.vue";
import ReviewForm from "../components/Review/ReviewForm.vue";
import ReviewRoom from "../components/Review/ReviewRoom.vue";
import ReviewHost from "../components/Review/ReviewHost.vue";
import CityCard from '../components/Cities/CityCard.vue' 
export default {
  name: "AllComponents",
  components: {
    Reservation,
    HomepageBanner,
    ReviewForm,
    ReviewRoom,
    ReviewHost,
    CityCard,
  },
};
</script>

<style></style>

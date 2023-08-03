<template>
  <div>
    <HomepageBanner />
    <Reservation />
    <ReviewForm />
    <ReviewRoom />
    <ReviewHost />
    <ListingCard/>
  </div>
</template>

<script>
import Reservation from "../components/ReservationComponent.vue";
import HomepageBanner from "../components/HomepageBanner.vue";
import ReviewForm from "../components/Review/ReviewForm.vue";
import ReviewRoom from "../components/Review/ReviewRoom.vue";
import ReviewHost from "../components/Review/ReviewHost.vue";
import ListingCard from "../components/ListingCard.vue"

export default {
  name: "AllComponents",
  components: {
    Reservation,
    HomepageBanner,
    ReviewForm,
    ReviewRoom,
    ReviewHost,
    ListingCard
  },
};
</script>

<style></style>

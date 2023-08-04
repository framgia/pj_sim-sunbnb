<template>
  <CityCard />
  <ReviewForm />
  <ReviewRoom />
  <ReviewHost />
</template>

<script>
  import CityCard from '../components/Cities/CityCard.vue'
  import ReviewForm from "../components/Review/ReviewForm.vue";
  import ReviewRoom from "../components/Review/ReviewRoom.vue";
  import ReviewHost from "../components/Review/ReviewHost.vue";

  export default {
    components: {
      ReviewForm, ReviewRoom, ReviewHost, CityCard
    }
  }
</script>

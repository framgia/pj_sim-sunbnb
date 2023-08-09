<template>
  <v-card elevation="2" width="240" height=300 :href="listing.link">
    <v-img cover height="180" :src="listing.image"></v-img>
    <v-card-item>
      <v-card-subtitle>{{ listing.name }}</v-card-subtitle>
      <v-card-subtitle>{{ listing.price }} - {{ listing.type }} - {{ listing.capacity }}</v-card-subtitle>
      <v-rating v-model="listing.rating" color="amber" density="compact" readonly size="small"></v-rating>
      <v-card-subtitle>{{ listing.reviewtotal }}</v-card-subtitle>
    </v-card-item>
  </v-card>
</template>

<script setup>

import { ref, onMounted } from "vue";
import listingData from "../utilities/dummy/ListingData.json"

const listing = ref({});

onMounted(() => {
  listing.value = listingData;
});

</script>


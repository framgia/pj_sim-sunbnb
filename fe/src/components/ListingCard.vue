<template>
  <v-card elevation="2" width="240" height=300>
    <v-img cover height="180" :src="homeItem.image"></v-img>
    <v-card-item>
      <v-card-subtitle>{{ homeItem.name }}</v-card-subtitle>
      <v-card-subtitle>{{ homeItem.price }} - {{ homeItem.type }} - {{ homeItem.capacity }}</v-card-subtitle>
      <v-rating v-model="homeItem.rating" color="amber" density="compact" readonly size="small"></v-rating>
      <v-card-subtitle>{{ homeItem.reviewtotal }}</v-card-subtitle>
    </v-card-item>
  </v-card>
</template>

<script setup>
import { defineProps , toRefs } from 'vue';

const  props  = defineProps(['homeItem']);
const { homeItem } = toRefs(props);
</script>


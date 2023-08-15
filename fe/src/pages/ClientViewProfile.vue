<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-card elevation="2" width="240" height="310">
          <v-img cover height="240" :src="client.image"></v-img>
          <v-card-item>
            <v-card-text class="name-text">{{ client.name }}</v-card-text>
            <v-card-text class="number-text">{{ client.phoneNumber }}</v-card-text>
          </v-card-item>
        </v-card>
      </v-col>

      <v-col cols="9">
        <h2>Description</h2>
        <p align="justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, assumenda atque minus culpa
          ut consequatur minima. Eaque, nobis in. Dignissimos ducimus esse ad commodi enim
          veritatis, fugiat voluptatem quia porro.
        </p>
        <div class="divider"></div>
        <br />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import user from "../utilities/dummy/User.json";

const client = ref({});

onMounted(() => {
  client.value = user;
});

//TODO: Retrieve all the reviews made by the user then show it using the review component
</script>

<style scoped>
.name-text {
  font-size: 1.4em;
  padding: 0;
  font-weight: 550;
}
.number-text {
  font-size: 1.1em;
  padding: 0;
  font-weight: normal;
  color: gray;
}
</style>

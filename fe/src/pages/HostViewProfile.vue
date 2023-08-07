<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-card elevation="2" width="240" height="310">
            <v-img cover height="240" :src="host.image"></v-img>
            <v-card-item>
              <v-card-text class="name-text">{{ host.name }}</v-card-text>
              <v-card-text class="number-text">{{ host.phoneNumber }}</v-card-text>
            </v-card-item>
          </v-card>
        </v-col>

        <v-col cols="9">
          <div>
            <h2>Description</h2>
            <p align="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, assumenda atque minus
              culpa ut consequatur minima. Eaque, nobis in. Dignissimos ducimus esse ad commodi enim
              veritatis, fugiat voluptatem quia porro.
            </p>
            <div class="divider"></div>
          </div>

          <div>
            <h2>Listings</h2>
            <!-- TODO: Home Card Components here -->
            <div class="divider"></div>
          </div>

          <div>
            <Reviews />
            <div class="divider"></div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import user from "../utilities/dummy/User.json";
import Reviews from "../components/Review/ReviewHost.vue";

const host = ref({});

onMounted(() => {
  host.value = user;
});

//TODO: Retrieve all the owned listings show it as the listing card components
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

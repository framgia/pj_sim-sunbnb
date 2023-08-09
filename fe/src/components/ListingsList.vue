<template>
  <div v-for="(chunks, rowIndex) in itemChunks" :key="rowIndex">
    <v-row>
      <div class="listing-view">
        <Home v-for="(item, colIndex) in chunks" :key="colIndex" :homeItem="item" />
      </div>
    </v-row>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
import homeData from "../utilities/dummy/ListingData.json";
import Home from "../components/ListingCard.vue";

const items = reactive(homeData);
const itemChunks = computed(() => {
  const chunkSize = 4;
  const chunks = [];

  for (let i = 0; i < items.length; i += chunkSize) {
    chunks.push(items.slice(i, i + chunkSize));
  }

  return chunks;
});
</script>

<style>
.listing-view {
  display: flex;
  gap: 5rem;
  padding: 10px;
  margin: 15px;
  margin-left: 30px;
}
</style>

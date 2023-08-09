<template>
  <div class="search-container">
    <v-expand-transition>
      <Filter v-if="filterVisible" />
    </v-expand-transition>
    <v-btn class="filter-btn" @click="toggleFilter">
      {{ filterVisible ? "Hide Filters" : "More Filters" }}
    </v-btn>
    <!-- TODO: result card component here -->
  </div>
</template>

<script>
import Filter from "../components/filter";
export default {
  components: {
    Filter,
  },
  data() {
    return {
      filterVisible: false,
    };
  },
  methods: {
    toggleFilter() {
      this.filterVisible = !this.filterVisible;
    },
  },
};
</script>

<style>
.search-container {
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
}

.filter-btn {
  margin-top: 10px;
  background-color: red !important;
  color: white !important;
  width: 30%;
  align-self: center;
  border-radius: 10px !important;
}
</style>

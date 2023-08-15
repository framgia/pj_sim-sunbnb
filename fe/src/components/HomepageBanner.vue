<template>
  <div>
    <div>
      <div class="banner-desc">
        <span class="sunbnb">SunBnB</span> Book unique homes <br />and experience a city like a
        local.
      </div>
      <div class="banner-wrapper">
        <div class="input-wrapper">
          <v-text-field
            v-model="location"
            dense
            class="text-field"
            label="Where are you going?"
            variant="outlined"
          ></v-text-field>
          <DatePicker v-model="selectedDate" class="date" />
        </div>
        <v-btn class="input-search" @click="search">Search</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "../components/DatePicker.vue";
export default {
  components: { DatePicker },
  data() {
    return {
      location: "",
      selectedDate: null,
    };
  },
  methods: {
    search() {
      const searchQuery = {
        location: this.location,
        date: this.selectedDate,
      };
      this.$router.push({ path: "/search", query: searchQuery });
    },
  },
};
</script>

<style>
.sunbnb {
  color: black;
}

.banner-desc {
  font-size: 50px;
  color: #707070;
}

.input-wrapper {
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
}

.banner-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text-field {
  height: 60px !important;
  max-width: 50% !important;
  margin-right: 15px;
}

.input-search {
  background-color: red !important;
  color: white !important;
  width: 20%;
  border-radius: 15px !important;
  margin: 10px;
}

.input-search:hover {
  background-color: #d40000 !important ;
}
</style>

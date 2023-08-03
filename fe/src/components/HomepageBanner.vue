<template>
  <v-app>
    <div>
      <div class="home-desc">
        <span class="sunbnb">SunBnB</span> Book unique homes <br />and
        experience a city like a local.
      </div>
      <div class="home-wrapper">
        <div class="input-wrapper">
          <v-text-field
            dense
            class="text-field"
            label="Where are you going?"
            variant="outlined"
          ></v-text-field>
          <DatePicker class="date" />
        </div>
        <v-btn class="home-search">Search</v-btn>
      </div>
    </div>
    <div class="divider"></div>
  </v-app>
</template>

<script>
import DatePicker from "../components/DatePicker.vue";
export default {
  components: { DatePicker },
};
</script>

<style>
.sunbnb {
  color: black;
}

.home-desc {
  font-size: 50px;
  color: #707070;
}

.input-wrapper {
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
}

.home-wrapper {
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

.home-search {
  background-color: red !important;
  color: white !important;
  width: 20%;
  border-radius: 15px !important;
  margin: 10px;
}

.home-search:hover {
  background-color: #d40000 !important ;
}

.divider {
  height: 1px;
  width: 100%;
  background-color: #b6b6b6;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>

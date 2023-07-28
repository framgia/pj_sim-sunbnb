<template>
  <div>
    <v-row align="center">
      <v-col cols="8">
        <v-slider v-model="slider" :max="max" :min="min" hide-details></v-slider>
        <p class="slider-value">Current Amount: {{ slider.toFixed(0) }}</p>
      </v-col>
      <v-col cols="2">
        <v-text-field
          v-model="min"
          label="MIN"
          type="number"
          hide-details
          @input="updateSlider"
        ></v-text-field>
      </v-col>
      <v-col cols="2">
        <v-text-field
          v-model="max"
          label="MAX"
          type="number"
          hide-details
          @input="updateSlider"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Initial values for the slider
      min: 0,
      max: 1000,
      slider: 500,
    };
  },
  methods: {
    updateSlider() {
      // Ensures that the slider value stays within the range [min, max]
      this.slider = Math.min(Math.max(this.slider, this.min), this.max);
    },
  },
};
</script>

<style>
.slider-value {
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
}
</style>

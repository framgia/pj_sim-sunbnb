<template>
  <div class="filter-container">
    Price Range:
    <PriceSlider class="slider" />
    <div class="divider" />
    Dates:
    <!-- // TODO: Will be use in the future for date input -->
    <Divider />
    Room Type:
    <RoomCheckbox class="checkbox" />
    <div class="divider" />
    Amenities:
    <AmenitiesCheckbox class="checkbox" />
  </div>
</template>

<script>
import PriceSlider from "./PriceSlider.vue";
import RoomCheckbox from "./RoomCheckbox.vue";
import AmenitiesCheckbox from "./AmenitiesCheckbox.vue";
export default {
  components: {
    PriceSlider,
    RoomCheckbox,
    AmenitiesCheckbox,
  },
};
</script>

<style>
.filter-container {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10%;
}
.checkbox {
  display: flex;
}
</style>

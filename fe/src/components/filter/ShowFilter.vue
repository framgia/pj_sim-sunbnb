<template>
  <div class="filter-container">
    Price Range:
    <PriceSlider />
    <div class="divider" />
    Dates:
    <DatePicker class="datepicker" />
    <div class="divider" />
    Room Type:
    <RoomCheckbox class="checkbox" />
    <div class="divider" />
    Amenities:
    <AmenitiesCheckbox class="checkbox" />
  </div>
</template>

<script>
import PriceSlider from "./PriceSlider.vue";
import DatePicker from "../../components/DatePicker.vue";
import RoomCheckbox from "./RoomCheckbox.vue";
import AmenitiesCheckbox from "./AmenitiesCheckbox.vue";
export default {
  components: {
    PriceSlider,
    RoomCheckbox,
    AmenitiesCheckbox,
    DatePicker,
  },
};
</script>

<style>
.checkbox {
  display: flex;
}
.datepicker {
  margin: 10px;
}
</style>

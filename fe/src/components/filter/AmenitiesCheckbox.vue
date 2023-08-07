<template>
  <v-container fluid>
    <v-checkbox v-model="selected" label="TV" value="tv"></v-checkbox>
    <v-checkbox v-model="selected" label="Heating" value="heating"></v-checkbox>
    <v-checkbox v-model="selected" label="Kitchen" value="kitchen"></v-checkbox>
    <v-checkbox v-model="selected" label="Air Conditioning" value="airconditioning"></v-checkbox>
    <v-checkbox v-model="selected" label="Internet" value="internet"></v-checkbox>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      selected: [],
    };
  },
};
</script>

<style></style>

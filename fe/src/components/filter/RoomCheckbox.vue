<template>
  <v-container fluid>
    <v-checkbox v-model="selected" label="Entire Room" value="entireroom"></v-checkbox>
    <v-checkbox v-model="selected" label="Private" value="private"></v-checkbox>
    <v-checkbox v-model="selected" label="Shared" value="shared"></v-checkbox>
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

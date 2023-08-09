<template>
  <v-app class="pl-10">
    <v-navigation-drawer permanent>
      <v-list dense>
        <v-list-item-group>

          <!--Listings-->
          <v-list-item @click.capture="handleClick(0)" :class="{ 'option-active': activeIndex === 0 }">
            <v-list-item-content>
              <v-list-item-title><b>Your Listings</b></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!--Reservations-->
          <v-list-item @click.capture="handleClick(1)" :class="{ 'option-active': activeIndex === 1 }">
            <v-list-item-content>
              <v-list-item-title><b>Your Reservations</b></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script setup>
  import {ref } from 'vue';
  const activeIndex = ref(null);

  const handleClick = (index) => {
    if (activeIndex.value !== index) {
      activeIndex.value = index;
    }
  }
</script>

<style scoped>
  .option-active {
    background-color: red !important;
    border-radius: 5px;
    color: white;
  }

</style>

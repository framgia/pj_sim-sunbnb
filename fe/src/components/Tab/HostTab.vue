<template>
  <v-app>
    <v-navigation-drawer permanent>
      <v-list dense>
        <v-list-item-group>
          <!--Listings-->
          <v-list-item
            @click.capture="handleClick('list')" 
            :class="{ 'option-active': activeIndex === 'list' }"
          >
            <v-list-item-content>
              <v-list-item-title><b>Your Listings</b></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!--Reservations-->
          <v-list-item
            @click.capture="handleClick('reservation')" 
            :class="{ 'option-active': activeIndex === 'reservation' }"
          >
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
  import {ref} from 'vue'

  const activeIndex = ref('');

  const handleClick = (index) => {
      if (activeIndex.value !== index) {
        activeIndex.value = index;
      }
    }
</script>

<style scoped>
.option-active {
  background-color: #ff1f1f !important;
  border-radius: 5px;
  color: white;
}
</style>

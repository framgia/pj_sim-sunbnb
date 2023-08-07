<template>
  <v-app>
    <v-navigation-drawer permanent>
      <v-list dense>
        <v-list-item-group>
          <!--Listings-->
          <v-list-item
            href="#listings"
            @click="changeActive(true)"
            :class="{ 'option-active': isActive }"
          >
            <v-list-item-content>
              <v-list-item-title><b>Your Listings</b></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!--Reservations-->
          <v-list-item
            href="#reservations"
            @click="changeActive(false)"
            :class="{ 'option-active': !isActive }"
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
let isActive = true;

function changeActive(isListing) {
  isActive = isListing;
}
</script>

<style scoped>
.option-active {
  background-color: #ff1f1f !important;
  border-radius: 5px;
  color: white;
}
</style>

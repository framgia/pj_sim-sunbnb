<template>
  <v-app class="pl-10">
    <v-navigation-drawer permanent>
      <v-list dense>
        <v-list-item-group>

          <!--Listings-->
          <v-list-item href="#listings" @click="changeActive('list')" :class="{'option-active' : isActive}">
            <v-list-item-content>
              <v-list-item-title><b>Your Listings</b></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!--Reservations-->
          <v-list-item href="#reservations" @click="changeActive('res')" :class="{'option-active' : !isActive}">
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
  let isActive = true

  function changeActive(option) {

    switch(option){
      case "list": isActive = true; 
      break;
      case "res": isActive = false; 
    }
  }
</script>

<style scoped>
  .option-active {
    background-color: #FF1F1F !important;
    border-radius: 5px;
    color: white;
  }

</style>

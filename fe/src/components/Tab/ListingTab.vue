<template>
    <v-app class="pl-10">
      <v-navigation-drawer permanent>
        <v-list dense>
          <v-list-item-group>
  
            <!--Listing-->
            <v-list-item href="#listing" :class="{'option-active' : changeActive('listing')}">
              <v-list-item-content>
                <v-list-item-title><b>Listing</b></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
  
            <!--Pricing-->
            <v-list-item href="#pricing" :class="{'option-active' : changeActive('pricing')}">
              <v-list-item-content>
                <v-list-item-title><b>Pricing</b></v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!--Description-->
            <v-list-item href="#description" :class="{'option-active' : changeActive('description')}">
              <v-list-item-content>
                <v-list-item-title><b>Description</b></v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!--Photos-->
            <v-list-item href="#photos" :class="{'option-active' : changeActive('photos')}">
              <v-list-item-content>
                <v-list-item-title><b>Photos</b></v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!--Amenities-->
            <v-list-item href="#amenities" :class="{'option-active' : changeActive('amenities')}">
              <v-list-item-content>
                <v-list-item-title><b>Amenities</b></v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!--Location-->
            <v-list-item href="#location" :class="{'option-active' : changeActive('location')}">
              <v-list-item-content>
                <v-list-item-title><b>Location</b></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
  
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-app>
  </template>
  
  <script setup>

    // Checks whether or not an option is selected
    function changeActive(activeOption) {
      const url = window.location.href;
      const optionID = url.split("#").slice(-1)[0];

      // Checks if the URL ID matches the option
      switch(optionID === activeOption) {
        case true:
          return true; // When option is selected and is to be highlighted
        case false:
          return false; // When option is not selected and is to be plain
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
  
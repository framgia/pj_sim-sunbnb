<template>
  <v-container>
   <v-navigation-drawer class="pr-2" permanent position="fixed">
      <v-list dense>
        <v-list-item-group>
          <!--Reservations-->
          <v-list-item position="fixed" class="option-active">
            <v-list-item-content>
              <v-list-item-title><b>Your Reservations</b></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<style scoped>
  .option-active {
    background-color: #FF1F1F !important;
    border-radius: 5px;
    color: white;
  }

</style>

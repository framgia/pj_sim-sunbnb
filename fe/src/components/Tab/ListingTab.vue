<template>
      <v-navigation-drawer permanent>
        <v-list dense>
          <v-list-item-group>
  
            <!--Listing-->
            <v-list-item  @click.capture="handleClick('list')" :class="{ 'option-active': activeIndex === 'list' }">
              <v-list-item-content>
                <v-list-item-title><b>Listing</b></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
  
            <!--Pricing-->
            <v-list-item @click.capture="handleClick('price')" :class="{ 'option-active': activeIndex === 'price' }" >
              <v-list-item-content>
                <v-list-item-title><b>Pricing</b></v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!--Description-->
            <v-list-item @click.capture="handleClick('desc')" :class="{ 'option-active': activeIndex === 'desc'}" >
              <v-list-item-content>
                <v-list-item-title><b>Description</b></v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!--Photos-->
            <v-list-item @click.capture="handleClick('photo')" :class="{ 'option-active': activeIndex === 'photo' }" >
              <v-list-item-content>
                <v-list-item-title><b>Photos</b></v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!--Amenities-->
            <v-list-item @click.capture="handleClick('amenities')" :class="{ 'option-active': activeIndex === 'amenities' }">
              <v-list-item-content>
                <v-list-item-title><b>Amenities</b></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
  
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
  </template>
  
  <script setup>
    import {ref , defineExpose , defineEmits} from 'vue'

    const activeIndex = ref('');
    const emit = defineEmits(['scrollTo'])

    const handleClick = (index) => {
      if (activeIndex.value !== index) {
        activeIndex.value = index;
      }

      emit('scrollTo' , index);
    }

    defineExpose({
      handleClick,
    })
  </script>
  
  <style scoped>
    .option-active {
      background-color: red !important;
      border-radius: 5px;
      color: white;
    }
  
  </style>
  
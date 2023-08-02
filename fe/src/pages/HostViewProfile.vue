<template>
    <v-container>
        <v-row class="mt-16">
            <v-col cols="3">
                <v-card elevation="2" width="240" height=310>
                    <v-img cover height="240" :src="host.image"></v-img>
                    <v-card-item>
                        <v-card-subtitle>{{ host.name }}</v-card-subtitle>
                        <v-card-subtitle>{{ host.phoneNumber }}</v-card-subtitle>
                    </v-card-item>
                </v-card>
            </v-col>

            <v-col cols="9">
                <h2>Description</h2>
                <p align="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, assumenda atque minus culpa
                    ut consequatur minima. Eaque, nobis in. Dignissimos ducimus esse ad commodi enim veritatis, fugiat
                    voluptatem quia porro.</p>
                <br>

                <div>
                    <h2>Listings</h2>
                    <!-- Home Card Components here -->
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
    
<script setup>
import { ref, onMounted } from "vue";
import user from "../utilities/dummy/User.json"

const host = ref({});

onMounted(() => {
    host.value = user;

});

//To do
//Retrieve all the owned listings show it as the home card components


</script>
  

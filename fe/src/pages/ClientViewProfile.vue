<template>
    <v-container class="mt-16">
        <v-row>
            <v-col cols="3">
                <v-card elevation="2" width="240" height=310>
                    <v-img cover height="240" :src="client.image"></v-img>
                    <v-card-item>
                        <v-card-subtitle>{{ client.name }}</v-card-subtitle>
                        <v-card-subtitle>{{ client.phoneNumber }}</v-card-subtitle>
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
                    <!-- Review Components here -->
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
    
<script setup>
import { ref, onMounted } from "vue";
import user from "../utilities/dummy/User.json"

const client = ref({});

onMounted(() => {
    client.value = user;

});

//To do
//Retrieve all the reviews made by the user then show it using the review components


</script>
  

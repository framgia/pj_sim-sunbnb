<template>
    <v-container>
        <v-sheet
            max-width="400"
            class="mx-auto mt-8"
            elevation="12"
            height="200"
            width="100%"
        >
            <v-row 
                align="start"
                style="background-color: red; height: 50px; margin: auto;"
            >
                <v-col>
                    <h3>₱ 1000</h3>
                </v-col>   
                <v-col>
                    <h3><strong>Per Night</strong></h3>
                </v-col>  
            </v-row>
            <v-row
                style="margin: auto;"
            >
                <v-col>
                    <p><strong>Check-In</strong></p>
                    <input type="date" v-model="checkin" @change="updateMin">
                </v-col>
                <v-col>
                    <p><strong>Check-Out</strong></p>
                    <input type="date" :min="checkoutMin" v-model="checkout">
                </v-col>
            </v-row>
            <v-row
                style="margin: auto; max-width: 350px;"
            >
                <v-btn 
                    variant="tonal" 
                    block rounded="lg" 
                    size="x-large"
                    class="book-btn"
                >
                    Book Now
                </v-btn>
            </v-row>
        </v-sheet>
        
    </v-container>
    
</template>

<script setup>
import { ref } from "vue";


    const checkin = ref('');
    const checkout = ref('');
    const checkoutMin = ref('');

    const updateMin = () => {
        checkoutMin.value = checkin.value;
    }
</script>

<style scoped>
    h3{
        color: white;
    }

    .book-btn{
        color:white;
        background: red;
        border-radius: 10px;
    }
</style>

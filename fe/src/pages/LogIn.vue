<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4" lg="4">
                        <v-card elevation="0">
                            <v-card-title class="text-h3 text-md-h20 text-lg-h4 text-center mb-3">Login</v-card-title>
                                <v-card-text>
                                    <v-form>                                    
                                        <v-text-field 
                                            label="Email" 
                                            type="email" 
                                            prepend-inner-icon ="mdi-email-outline"
                                            variant="outlined"
                                        ></v-text-field>    

                                        <br>

                                        <v-text-field
                                            label="Password"
                                            prepend-inner-icon="mdi-lock-outline"
                                            variant="outlined"
                                            :type="visiblePw ? 'text' : 'password'"
                                            :append-inner-icon="visiblePw ? 'mdi-eye' : 'mdi-eye-off'"
                                            @click:append-inner="visiblePw = !visiblePw"
                                        ></v-text-field>
                                    
                                        <br>

                                        <v-btn 
                                            @click="login" 
                                            class="mb-2" 
                                            color="red" 
                                            x-large block dark
                                        >
                                            Log In
                                        </v-btn>
                                    </v-form>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import {ref} from 'vue'
const visiblePw = ref(false)


    //To do
    //This function will be used to trigger login functionality after BE implementation
    const login = () => {
      
    }

</script>
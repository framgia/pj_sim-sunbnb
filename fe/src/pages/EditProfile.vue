<template>
    <div class="container">
        <v-card elevation="2" width="1000" height="600">
            <div class="pb-3 x-large">
                <v-card-title class="header">
                    <h3 class="text-center">Your Profile</h3>
                </v-card-title>
            </div>

            <div class="form-content">
                <v-form class="form-field" >

                    <v-text-field 
                        v-model="fullName.value.value" 
                        :error-messages="fullName.errorMessage.value" 
                        placeholder="Full Name" 
                        type="text" 
                        variant="outlined" 
                        dense
                    ></v-text-field>   

                    <v-text-field 
                        v-model="phone.value.value" 
                        :error-messages="phone.errorMessage.value" 
                        placeholder="Phone Number" 
                        type="number" 
                        variant="outlined" 
                        height="10px"
                    ></v-text-field>

                    <v-text-field 
                        v-model="email.value.value" 
                        :error-messages="email.errorMessage.value" 
                        placeholder="Email" 
                        type="email" 
                        variant="outlined"
                    ></v-text-field>

                    <v-textarea   
                        v-model="description.value.value" 
                        :error-messages="description.errorMessage.value" 
                        placeholder="Description" 
                        type="text" 
                        variant="outlined" 
                        rows="2" 
                        no-resize
                    ></v-textarea>

                    <v-text-field 
                        v-model="password.value.value" 
                        :error-messages="password.errorMessage.value" 
                        placeholder="Password" 
                        variant="outlined">
                    </v-text-field>

                    <v-text-field 
                        v-model="confirmPw.value.value" 
                        :error-messages="confirmPw.errorMessage.value" 
                        placeholder="Confirm Password" 
                        variant="outlined"
                    ></v-text-field>
                    
                    <v-btn 
                        @click="save" 
                        class="mb-2" 
                        color="red" 
                        x-large block
                      >
                          Save
                    </v-btn>
                </v-form>
            </div>
        </v-card>
    </div>
</template>

<script setup>

import { useField, useForm } from 'vee-validate'

  useForm({
    validationSchema: {

    fullName (value){
      if (value?.length >=2) return true
      return 'Full name needs to be atleast 2 characters'
    },

    email (value){
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
      return 'Must be a valid email address'
    },

    phone (value){
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true
      return 'Phone number needs to be atleast 9 digits'
    },

    description (value) {
      if (value?.length >= 8) return true
      return 'Description needs to be atleast 8 characters'
    },

    password (value) {
      if (value?.length >= 8 && /^(?=.*[A-Za-z])(?=.*\d).*$/.test(value)) return true
      return 'Must be a valid password.'
    },

    confirmPw (value) {
        if (value === password.value.value) return true
        return 'Password confirmation does not match.'
      },

    }
  })

const fullName = useField('fullName')
const email = useField('email')
const phone = useField('phone')
const description = useField('description')
const password = useField('password')
const confirmPw = useField('confirmPw')

//To do
// This function will be used to trigger save changes (on the user profile) functionality after BE implementation
const save = () => {
}

</script>

<style>

  .container {
      display: flex;
      align-items: center;
      justify-content: center;
      
  }

  .form-content {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 100%;
      
      
  }

  .form-field {
    width: 700px;
      
  }

  .header {
      color: white;
      background: red;

  }

</style>











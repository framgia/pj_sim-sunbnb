<template>
  <v-container>   
      <form @submit.prevent="submit">
        <h1>Sign Up!</h1>
        <v-text-field
            v-model="firstName.value.value"
            :counter="20"
            
            :error-messages="firstName.errorMessage.value"
            label="First Name"
        ></v-text-field>

        <v-text-field
            v-model="lastName.value.value"
            :counter="20"
            :error-messages="lastName.errorMessage.value"
            label="Last Name"
        ></v-text-field>
    
        <v-text-field
          v-model="phone.value.value"
          :type="number"
          :counter="11"
          :error-messages="phone.errorMessage.value"
          label="Phone Number"
        ></v-text-field>
    
        <v-text-field
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            label="E-mail"
        ></v-text-field>

        <v-text-field
            v-model="username.value.value"
            :counter="20"
            :error-messages="username.errorMessage.value"
            label="Username"
        ></v-text-field>

        <v-text-field
          v-model="password.value.value"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          :error-messages="password.errorMessage.value"
          name="input-10-1"
          label="Password"
          @click:append="show1 = !show1"
        ></v-text-field>

        <v-file-input
          v-model="profileImg.value.value"
          accept="image/png, image/jpeg, image/bmp"
          prepend-icon="mdi-camera"
          label="Profile Picture"
        ></v-file-input>


        <v-file-input
            v-if="showHostInput"
            label="DTI Documents"
            variant="filled"
            v-model="dtiImg.value.value"
        ></v-file-input>


        <v-radio-group v-model="userType" inline label="User Type:" @change="handleUserType">
            <v-radio label="Client" value="client"></v-radio>
            <v-radio label="Host" value="host"></v-radio>
        </v-radio-group>
        
        <v-btn
            class="me-4"
            type="submit"
        >
            submit
        </v-btn>
    
        <v-btn @click="handleReset">
            clear
        </v-btn>
      </form>
  </v-container>   
</template>
  <script setup>
    import { useField, useForm } from 'vee-validate'
    import { ref } from 'vue'

    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        firstName (value) {
          if (value?.length >= 2 && value?.length <= 20) return true
  
          return 'First Name needs to be at least 2 characters and not more than 20 characters.'
        },

        lastName (value) {
          if (value?.length >= 2 && value?.length <= 20) return true
  
          return 'Last Name needs to be at least 2 characters and not more than 20 characters.'
        },

        phone (value) {
          if (value?.length > 9 && /[0-9-]+/.test(value)) return true
  
          return 'Phone number needs to be at least 9 digits.'
        },
        email (value) {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
  
          return 'Must be a valid e-mail.'
        },
        username (value) {
          if (value?.length >= 5) return true
  
          return 'Must be a valid Username.'
        },
        password (value) {
          if (value?.length >= 8 && /^(?=.*[A-Za-z])(?=.*\d).*$/.test(value)) return true
  
          return 'Must be a valid password.'
        },
        profileImg (value) {
          if (value != null) return true
  
          return 'Please Attach a Photo.'
        },
        dtiImg (value) {
          if (value != null && showHostInput.value == true) return true
          if(showHostInput.value == false) return true
          return 'Please Attach a Photo.'
        },
      },
    })
    
    const firstName = useField('firstName')
    const lastName = useField('lastName')
    const phone = useField('phone')
    const email = useField('email')
    const username = useField('username')
    const password = useField('password')
    const profileImg = useField('profileImg')
    const dtiImg = useField('dtiImg')
    const showHostInput = ref(false);
    const userType = ref('client');
    const show1 = ref(false);


    const handleUserType = () =>{
        if(userType.value == 'host'){
            showHostInput.value = true;
        }
        if(userType.value == 'client'){
            showHostInput.value = false;
        }
    }
  
    const submit = handleSubmit(values => {
      alert(JSON.stringify(values, null, 2))
      
    })
  </script>

<style scope>
    .form-container {
        display: block;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .form-content {
        max-width: 1000px;
        width: 100%;
    }
</style>
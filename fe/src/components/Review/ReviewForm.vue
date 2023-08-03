<template>
    <v-container class="pt-10 pb-10 pl-15 pr-15 text-center" id="form">
        <p><em>Click the stars to rate the room!</em></p>
        <!-- Stars -->
        <v-rating v-model="rating" color="red" size="x-large" hover></v-rating>

        <!-- Text Review -->
        <v-container class="pl-15 pr-15 pb-5">
            <v-textarea 
                v-model ="review"
                :counter="500" 
                :rules="[v => (v || '' ).length <= 500 || 'Review must be 500 characters or less!']" 
                label="Type your review here...">
            </v-textarea>
        </v-container>

        <!-- Submit Button -->
        <v-btn color="red" rounded="lg" id="btn">Submit</v-btn>
    </v-container>
</template>

<script setup>
    import { ref } from "vue";

    const rating = ref('');
    const review = ref('');

</script>

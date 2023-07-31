<template>
    <div class="pt-10 pb-10 pl-15 pr-15">
        <!-- Header -->
        <h2 class="d-flex align-center">
            Reviews From Guests ({{ reviews.length }}) 
            <!-- Stars -->
            <v-rating class="ma-0 pa-0" v-model="totalRating" readonly color="red" density="comfortable" :model-value="averageStarRating"></v-rating>
        </h2>
        <!-- Reviews -->
        <div v-for="review in reviews" :key="review.id">
            <div class="d-flex align-center flex-wrap pl-16 text-left">
                <div class="pt-3 pr-10">
                    <!-- For images -->
                    <v-avatar class="d-flex align-start" :image="review.img" size="60"></v-avatar>
                    <p class="pt-2 text-center"><b>{{ review.name }}</b></p>
                </div>
                <div>
                    <v-rating class="d-flex align-start pb-1" v-model="review.rating" color="red" size="20" readonly></v-rating>
                    <p class="d-flex align-center">{{ review.date }}</p>
                    <p class="d-flex align-end">{{ review.review }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import revs from "../../utilities/dummy/Review.json"
    export default {
        data: () => ({
            reviews: revs
        }),

        computed: {
            averageStarRating() {
                let sum = 0;
                revs.forEach((review) => sum += review.rating);
                return sum / this.reviews.length;
            }
        }
    }
</script>
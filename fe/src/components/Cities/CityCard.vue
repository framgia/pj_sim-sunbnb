<template>
    <div class="pt-10 pb-10 pl-15 pr-15">
        <h2>Cities</h2>
        <v-container fluid >
            <v-layout align-start row fill-height>
                <div v-for="city in cities" :key="city.id" class="pl-3 pr-3">
                    <v-card  :href="city.link" width="200px">
                        <v-img 
                            :src="city.image" class="align-end text-white" 
                            gradient="to bottom, rgba(255,255,255,.1), rgba(0,0,0,.5)" 
                            cover width="200px" height="400px">
                            <v-card-title>{{ city.name }}</v-card-title>
                        </v-img>
                    </v-card>
                </div>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import cities from "../../utilities/dummy/Cities.json"
    export default {
        data: () => ({
            cities: cities
        })
    }
</script>

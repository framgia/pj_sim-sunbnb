<template>
    <v-container 
        fluid
    >
    <div class="tab">
        <TabList ref="child" @scrollTo="scrollTo"/>
    </div>
        <div ref="listRef"></div>
        <h1>Add New Listing</h1>
        <div @click.capture="handleClick('list')">
            <v-sheet :elevation="2" rounded color="grey-lighten-3" style="padding: 15px">
                <h3>Listing</h3>
                <br/>
                <v-row >
                    <v-col>
                        <v-select
                            label="Home Type"
                            :items="['Cabin' , 'Hotel' , 'Condo']"
                        ></v-select>
                    </v-col>
                    <v-col>
                        <v-select
                            label="Room Type"
                            :items="['Single' , 'Deluxe' , 'Entire House']"
                        ></v-select>
                    </v-col>
                    <v-col>
                        <v-text-field clearable label="Accomodates # Person" variant="outlined"></v-text-field>

                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field clearable label="Max # Bedroom" variant="outlined"></v-text-field>

                    </v-col>
                    <v-col>
                        <v-text-field clearable label="Max # Bathroom" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col/>
                </v-row>
            </v-sheet>
        </div>
        <br/>
        <br/>
        <div ref="priceRef"></div>
        <v-divider  :thickness="2" class="border-opacity-25"></v-divider>
        <br/>
        <br/>
        <div @click.capture="handleClick('price')">
            <v-sheet :elevation="2" rounded color="grey-lighten-3" style="padding: 15px">
                <h3>Pricing</h3>
                <br/>
                <v-row>
                    <v-col/>
                    <v-col
                        sm="3"
                        align-self="center"
                    >
                    <v-text-field clearable label="Price" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col/>
                </v-row>
            </v-sheet>
        </div>
        <br/>
        <br/>
        <div ref="descRef"></div>
        <v-divider :thickness="2" class="border-opacity-25"></v-divider>
        <br/>
        <br/>
        <div  @click.capture="handleClick('desc')">
            <v-sheet :elevation="2" rounded color="grey-lighten-3" style="padding: 15px">
                <h3>Description</h3>
                <br/>
                <v-row>
                    <v-col/>
                    <v-col
                        cols="12"
                        sm="6"
                        align-self="center"
                    >
                    <v-text-field clearable label="Listing Name" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col/>
                </v-row>
                <v-row>
                    <v-col/>
                    <v-col
                        cols="12"
                        sm="6"
                        align-self="center"
                    >
                    <v-textarea label="Summary" variant="outlined"></v-textarea>
                    </v-col>
                    <v-col/>
                </v-row>
            </v-sheet>
        </div>
        <br/>
        <br/>
        <v-divider :thickness="2" class="border-opacity-25"></v-divider>
        <br/>
        <br/>
        <div ref="photoRef" @click.capture="handleClick('photo')">
            <v-sheet :elevation="2" rounded color="grey-lighten-3" style="padding: 15px">
                <h3>Photo</h3>
                <br/>
                <v-row>
                    <v-col/>
                    <v-col
                        cols="12"
                        sm="6"
                        align-self="center"
                    >
                    <v-file-input
                        label="File input"
                        variant="filled"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera"
                    ></v-file-input>
                    </v-col>
                    <v-col/>
                </v-row>
            </v-sheet>
        </div>
        <br/>
        <br/>
        <v-divider :thickness="2" class="border-opacity-25"></v-divider>
        <br/>
        <br/>
        <div ref= "amenitiesRef" @click.capture="handleClick('amenities')">
            <v-sheet :elevation="2" rounded color="grey-lighten-3" style="padding: 15px">
                <h3>Amenities</h3>
                <br/>
                <div style="display: flex; flex-wrap: wrap; justify-content: space-between; max-width: 600px; margin: auto;">
                    <div style="flex-basis: 30%; margin: 5px;">
                        <v-checkbox
                            label="TV"
                            color="primary"
                            value="tv"
                        ></v-checkbox>
                        <v-checkbox
                            label="Heating"
                            color="primary"
                            value="heating"
                        ></v-checkbox>
                    </div>
                    <div style="flex-basis: 30%; margin: 5px;">
                        <v-checkbox
                            label="Kitchen"
                            color="primary"
                            value="kitchen"
                        ></v-checkbox>
                        <v-checkbox
                            label="Air Conditioning"
                            color="primary"
                            value="air-con"
                        ></v-checkbox>
                    </div>
                    <div style="flex-basis: 30%; margin: 5px;">
                        <v-checkbox
                            label="Internet"
                            color="primary"
                            value="internet"
                        ></v-checkbox>
                    </div>                        
                </div>
            </v-sheet>
        </div>
        <br/>
        <v-row>
            <v-col/>
            <v-col>
                <v-btn class="submitBtn" block size="x-large" rounded="xl" variant="outlined">Add New Listing</v-btn>
            </v-col>
            <v-col/>
        </v-row>
    </v-container>
</template>

<script setup>
    import TabList from "../components/Tab/ListingTab.vue"
    import {ref} from 'vue';
    const child = ref(null);
    
    const handleClick = (active) =>{
        child.value.handleClick(active)
    }
    const listRef = ref(null);
    const priceRef = ref(null);
    const descRef = ref(null);
    const photoRef = ref(null);
    const amenitiesRef = ref(null);
    const scrollTo = (index) => {
        switch (index) {
            case 'list':
                listRef.value.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'price':
                priceRef.value.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'desc':
                descRef.value.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'photo':
                photoRef.value.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'amenities':
                amenitiesRef.value.scrollIntoView({ behavior: 'smooth' });
                break;
        }
    };

</script>

<style scoped>
    .submitBtn{
        background-color: red;
        color: white;
    }

    .tab {
        position: relative;
        float: left;
    }
</style>

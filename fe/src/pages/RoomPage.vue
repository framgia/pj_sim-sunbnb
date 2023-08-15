<template>
    <v-container>
        <v-img
            class="bg-white"
            height="500"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzHNtrG750ZsLvb-JU7SFm1pJE9TzKBnem9g&usqp=CAU"
            cover
        ></v-img>  
        <br/>     
        <div class="reservation">
            <Reservation/>
        </div>
        <div>
            <v-row>
                <v-col>
                    <h1>Not A Monster House</h1>
                    <h3>Old man st.</h3>
                </v-col>
                <div class="avatar-container">
                    <v-avatar :size="120">
                        <img src="./img-placeholder.png" alt="img" class="profile-photo"/>
                    </v-avatar>
                    <span>John Doe</span>
                </div> 
                               
            </v-row>
        </div>
        <br/>
        <v-divider :thickness="2" width="800px"></v-divider>
        <br/>
        <div class="max-width">
            <v-row >
                <v-col>
                    <div class="avatar-container">
                        <v-avatar :size="50" rounded="0">
                            <img src="./house.png" alt="img" class="icon-photo"/>
                        </v-avatar>
                        <span>House</span>
                    </div>
                </v-col>
                <v-col>
                    <div class="avatar-container">
                        <v-avatar :size="50" rounded="0">
                            <img src="./person.png" alt="img" class="icon-photo"/>
                        </v-avatar>
                        <span>2 Guest</span>
                    </div>
                </v-col>
                <v-col>
                    <div class="avatar-container">
                        <v-avatar :size="50" rounded="0">
                            <img src="./bathtub.png" alt="img" class="icon-photo"/>
                        </v-avatar>
                        <span>2 Bathroom</span>
                    </div>
                </v-col>
                <v-col>
                    <div class="avatar-container">
                        <v-avatar :size="60" rounded="0">
                            <img src="./bed.png" alt="img" class="icon-photo"/>
                        </v-avatar>
                        <span>1 Bedroom</span>
                    </div>
                </v-col>
            </v-row>
        </div>
        <br/>
        <v-divider :thickness="2" width="800px"></v-divider>
        <br/>
        <div class="max-width">
            <v-row>
                <v-col>
                    <h3>About This Listing</h3>
                    <br/>
                    <article>
                        <p align="justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, consequuntur. Voluptatibus, praesentium odit maxime sit molestiae, recusandae commodi nesciunt amet dolorem quod optio numquam eos libero, perspiciatis minima? Voluptatibus, iusto? 
                        </p>
                    </article>
                </v-col>   
            </v-row>
        </div>
        <br/>
        <v-divider :thickness="2" width="800px"></v-divider>
        <br/>
        <div class="max-width">
            <div class="amenities-container">
                <div class="amenities-column">
                    <h3>Amenities</h3>
                </div>
                <div class="amenities-column">
                    <p><s class="showStrike">TV</s></p>
                    <p><s class="hideStrike">Heating</s></p>
                    <p><s class="hideStrike">Kitchen</s></p>
                    
                </div>
                <div class="amenities-column">
                    <p><s class="showStrike">Air Conditioning</s></p>
                    <p><s class="hideStrike">Internet</s></p>
                </div>
            </div>
        </div>
        <br/>
        <v-divider :thickness="2" width="800px"></v-divider>
        <br/>
        <div class="max-width">
            <v-row>
                <v-col>
                    <Review/>
                </v-col>
            </v-row>
        </div>
        <br/>
        <v-divider :thickness="2" width="800px"></v-divider>
        <br/>
        <div>
            <Listing/>
        </div>
    </v-container>
</template>

<script setup>
    import Reservation from "../components/ReservationComponent.vue";
    import Review from "../components/Review/ReviewRoom.vue";
    import Listing from "../components/ListingsList.vue";
</script>

<style scoped>
    .max-width{
        max-width: 800px;
    }
    .reservation{
        position: relative;
        float: right;
        z-index: 3;
        top: -50px;
        
    }

    .profile-photo {
        width: 100px;
        height: 100px;
        margin: auto;
    }

    .avatar-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; 
        text-align: center;
    }
    
    .icon-photo{
        width: 50px;
        height: 50px;
    }

    .amenities-container {
        display: flex;
        flex-wrap: wrap;
    }

    .amenities-column {
        flex-basis: 20%;
    }
    
    .showStrike{
        text-decoration: line-through;
    }

    .hideStrike{
        text-decoration: none;
    }
</style>
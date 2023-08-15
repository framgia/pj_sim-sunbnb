<template>
  <v-container class="d-flex flex-row">
    <v-row align="start">
      <v-col>
        <HostTab />
        <v-main class="pl-10">
          <h1 id="listings">Listings</h1>
          <v-table class="pt-10 pb-15">
            <thead id="header">
              <tr>
                <th width="100"><!--Image--></th>
                <th width="700"><!--Name--></th>
                <th width="25"><!--Button--></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="listing in listings" :key="listing.name">
                <td class="pt-2 pb-2"><v-img class="d-flex justify-center" :src="listing.img" cover width="200" height="100" hide-details></v-img></td>
                <td><h3>{{ listing.name }}</h3><br>{{listing.address}}</td>
                <td><v-btn color="red" rounded="lg">Update</v-btn></td>
              </tr>
            </tbody>
          </v-table>

          <h1 id="reservations">Reservations</h1>
          <v-table class="pt-10 pb-15">
            <thead id="header">
              <tr>
                <th width="100">
                </th>
                <th width="100">
                </th>
                <th width="700">
                </th>
                <th width="50">
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="reservation in reservations" :key="reservation.name">
                <td>{{ reservation.date }}</td>
                <td class="pt-2 pb-2"><v-img :src="reservation.img" cover width="200" height="100"></v-img></td>
                <td>
                  <h3>{{ reservation.name }}</h3><br>
                  <v-avatar :image="reservation.avatar" size="30"></v-avatar> &nbsp; {{reservation.client}}
                </td>
                <td><v-btn color="red" rounded="lg">Review Guest</v-btn></td>
              </tr>
            </tbody>
          </v-table>
        </v-main>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
  import HostTab from '../components/Tab/HostTab.vue'
  import lists from '../utilities/dummy/Listings.json'
  import reservs from '../utilities/dummy/Reservations.json'
  export default {
    components: {
      HostTab
    },
    data: () => ({
      listings: lists,
      reservations: reservs
    })
  }
</script>

<style scoped>
  thead {
    background-color: red;
  }
</style>

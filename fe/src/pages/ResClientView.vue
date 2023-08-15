<template>
  <v-container class="d-flex flex-row">
    <v-row align="start">
      <v-col>
        <ClientTab />
        <v-main class="pl-10">
          <h1 id="reservations">Reservations</h1>
          <v-table class="pt-10 pb-15">
            <thead id="header">
              <tr>
                <th width="100">
                </th>
                <th width="200">
                </th>
                <th width="200">
                </th>
                <th width="100">
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="reservation in reservations" :key="reservation.name">
                <td>{{ reservation.date }}</td>
                <td class="pt-2 pb-2"><v-img :src="reservation.img" cover width="200" height="100"></v-img></td>
                <td>
                  <h3>{{ reservation.name }}</h3>
                </td>
                <td>
                  <v-btn color="red" rounded="lg" :disabled="checkedIn" @click="checkedIn = !checkedIn">Check In</v-btn><br><br>
                  <v-btn to="/review" color="red" :disabled="!checkedIn" rounded="lg" @click="checkedIn = !checkedIn">Check Out</v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-main>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
  import ClientTab from '../components/Tab/ClientTab.vue'
  import reservs from '../utilities/dummy/Reservations.json'
  export default {
    components: {
      ClientTab
    },
    data: () => ({
      reservations: reservs,
      checkedIn: true
    })
  }
</script>

<style scoped>
  thead {
    background-color: red;
  }
</style>

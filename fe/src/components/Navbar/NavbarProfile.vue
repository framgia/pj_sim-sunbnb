<template>
  <v-menu v-model="menuOpen" offset-y>
    <template v-slot:activator="{ props }">
      <div class="profile-btn-wrapper">
        <v-btn v-bind="props" class="profile-btn">
          <v-avatar>
            <img :src="host.image" alt="img" class="profile-photo" />
          </v-avatar>
          John Doe
        </v-btn>
      </div>
    </template>
    <!-- Dropdown menu content -->
    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        :value="index"
        @click="handleMenuItemClick(index)"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import user from "../../utilities/dummy/User.json";
export default {
  data() {
    return {
      menuOpen: false,
      host: user,
      items: [{ title: "View Profile" }, { title: "Edit Profile" }, { title: "My Reservations" }],
    };
  },
  methods: {
    handleMenuItemClick(index) {
      switch (index) {
        case 0:
          this.viewProfile();
          break;
        case 1:
          this.editProfile();
          break;
        case 2:
          this.myReservations();
          break;
        default:
          break;
      }
    },
    viewProfile() {
      this.$router.push("/host/profile");
    },
    editProfile() {
      this.$router.push("/edit-profile");
    },
    myReservations() {
      // TODO: Implement action for "My Reservations"
    },
  },
};
</script>

<style>
.profile-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-photo {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>

<template>
  <v-app-bar app>
    <div class="title"><a href="/">SunBnB</a></div>
    <form @submit.prevent="search">
      <input placeholder="Anywhere" class="search-bar" v-model="searchInput" />
    </form>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn class="become-a-host-btn" to="/registration">Become a Host</v-btn>
      <v-btn to="/login">Login</v-btn>
      <v-btn to="/registration">Signup</v-btn>
    </v-toolbar-items>

    <NavbarProfile />
  </v-app-bar>
</template>

<script>
import NavbarProfile from "./NavbarProfile.vue";
export default {
  name: "NavigationBar",
  components: {
    NavbarProfile,
  },
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    search() {
      const searchQuery = this.searchInput.trim();
      if (searchQuery) {
        this.$router.push({ path: "/search", query: { q: searchQuery } });
      }
    },
  },
};
</script>

<style>
.v-toolbar {
  color: black !important;
}

.title {
  font-size: 35px !important;
  color: red;
  cursor: pointer;
}

.title a {
  color: inherit;
  text-decoration: none;
}

.search-bar {
  padding: 8px;
  margin-left: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
}

.v-toolbar-items {
  display: flex;
  align-items: center;
}

.become-a-host-btn {
  background-color: red !important;
  padding: 10px 20px !important;
  height: 45px !important;
  border-radius: 10px !important ;
  color: white !important ;
}

.navbar-btn:hover {
  background-color: #e0dbdb;
}

.become-a-host-btn:hover {
  background-color: #d40000 !important ;
}

.v-toolbar__content {
  padding: 0 20px;
}
</style>

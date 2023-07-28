import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/global.css";
import vuetify from "./plugins/vuetify";
import router from "./router";
import "vuetify/dist/vuetify.css";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

createApp(App).use(router).use(vuetify).mount("#app");

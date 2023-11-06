import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "@tanstack/vue-query";
import VueDragscroll from "vue-dragscroll";

import App from "./App.vue";
import router from "./router";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin);
app.use(VueDragscroll);

app.mount("#app");

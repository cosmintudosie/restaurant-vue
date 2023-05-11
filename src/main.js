import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router/index.js";
import VeeValidatePlugin from "./includes/validation.js";
import axios from 'axios';

axios.defaults.baseURL = 'https://younger-four.codedamn.app:1338/api/';
const token = localStorage.getItem('token')
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VeeValidatePlugin);
app.mount("#app");

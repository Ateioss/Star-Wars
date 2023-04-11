import { createApp } from 'vue'
import gsap from "gsap";
import App from './App.vue';
import router from './router';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
window.$ = window.jQuery = require('jquery');
createApp(App).use(gsap).use(router).mount('#app')

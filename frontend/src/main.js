// import { createApp } from 'vue'
import HomePage from './pages/HomePage.vue'
import TrainingHomePage from './pages/TrainingHomePage.vue'
import JapaneseHomePage from './pages/JapaneseHomePage.vue'

import { createApp } from 'vue'
// import VueRouter, { 
//     // createWebHistory, 
//  } from "vue-router";

 import { createWebHistory, createRouter } from "vue-router";

/*
const GREY = "#e7e7de";
const BLUE_GREEN = "#008891";
const BLUE = "#00587a";
const DARK_BLUE = "#0f3057";
*/
const routes = [
  { path: '/', component: HomePage, name: "Home" },
  { path: '/fitness', component: TrainingHomePage, name: "Fitness Home" },
    { path: '/japanese', component: JapaneseHomePage, name: "Japanese Home" }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(HomePage).use(router).mount('#app')

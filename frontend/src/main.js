// import { createApp } from 'vue'
import HomePage from './pages/HomePage.vue'
import MathHomePage from './pages/MathHomePage.vue'
import App from './App.vue'

import TrainingHomePage from './pages/TrainingHomePage.vue'
import JapaneseHomePage from './pages/JapaneseHomePage.vue'
import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome)


/*
const GREY = "#e7e7de";
const BLUE_GREEN = "#008891";
const BLUE = "#00587a";
const DARK_BLUE = "#0f3057";
*/
const routes = [
  { path: '/', component: HomePage, name: "Home" },
  { path: '/fitness', component: TrainingHomePage, name: "Fitness Home" },
{ path: '/japanese', component: JapaneseHomePage, name: "Japanese Home" },
   { path: '/math', component: MathHomePage, name: "Math Home" }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
const app = createApp(App);
app.config.productionTip = false
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router).mount('#app')

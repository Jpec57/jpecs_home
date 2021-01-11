import HomePage from './pages/HomePage.vue'
import MathHomePage from './pages/MathHomePage.vue'
import TrainingHomePage from './pages/TrainingHomePage.vue'
import JapaneseHomePage from './pages/JapaneseHomePage.vue'
import ArticlePage from './pages/ArticlePage.vue'
// import NotFoundPage from './pages/NotFoundPage.vue'

import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: '/', component: HomePage, name: "Home" },
  { path: '/fitness', component: TrainingHomePage, name: "Fitness Home" },
{ path: '/japanese', component: JapaneseHomePage, name: "Japanese Home" },
   { path: '/math', component: MathHomePage, name: "Math Home" },
      { path: '/article/:slug/:id', component: ArticlePage, name: "Article" },
// {
//   path: '*', component: NotFoundPage
// }

]

export default createRouter({
  history: createWebHistory(),
  routes,
});
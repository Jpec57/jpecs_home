import HomePage from './pages/HomePage.vue'
import MathHomePage from './pages/MathHomePage.vue'
import TrainingHomePage from './pages/TrainingHomePage.vue'
import JapaneseHomePage from './pages/JapaneseHomePage.vue'
import ArticlePage from './pages/ArticlePage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'
import TestPage from './pages/TestPage.vue'
import CreateArticlePage from './pages/CreateArticlePage.vue'

import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: '/', component: HomePage, name: "Home", meta: { title: "Jpec's Homepage" } },
  { path: '/fitness', component: TrainingHomePage, name: "Fitness Home", meta: { title: "Fitness Home" } },
  { path: '/japanese', component: JapaneseHomePage, name: "Japanese Home", meta: { title: "Japanese Home" } },
  { path: '/math', component: MathHomePage, name: "Math Home", meta: { title: "Math Home" } },
  { path: '/create-article', component: CreateArticlePage, name: "Write", meta: { title: "Write" } },
  { path: '/test123', component: TestPage, name: "Test Home", meta: { title: "Testing Page" } },
  { path: '/article/:slug', component: ArticlePage, name: "FirebaseArticle", meta: { title: "Jpec's article" } },
  { path: '/article/:slug/:id', component: ArticlePage, name: "Article", meta: { title: "Jpec's article" } },
  {
    path: '/:pathMatch(.*)*', name: "Not found", component: NotFoundPage
  }

]

export default createRouter({
  history: createWebHistory(),
  routes,
});
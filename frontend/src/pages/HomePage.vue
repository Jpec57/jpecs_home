<template>
  <div class="body">
    <div class="left-side-container"></div>
    <div class="main-container">
      <h1>News</h1>
      <div class="article-container">
        <!-- <transition-group name="list-fadein" appear> -->
        <FirebaseArticlePreview
          v-for="(article) in articles"
          v-bind:key="article"
          :article="article"
          :id="article.id"
        />
                <ArticlePreview
          v-for="(article, index) in hardcodedArticles"
          v-bind:key="index"
          :article="article"
          :id="index"
        />
        <!-- </transition-group> -->
      </div>
    </div>
    <div class="right-side-container"></div>
  </div>
</template>

<script>
import articles from "../articles/articles";
import ArticlePreview from "../components/ArticlePreviewCard";
import FirebaseArticlePreview from "../components/FirebaseArticlePreviewCard";
// import { articlesCollection } from "../firebase";
// import Article from '../models/Article';

export default {
  name: "HomePage",
  components: {
    ArticlePreview,
    FirebaseArticlePreview,
    },
  data() {
    return {
      hardcodedArticles: articles,
      articles: [],
    };
  },
  methods: {
    async fetchArticles() {

      return [];
      // var firebaseArticles = [];
      // await articlesCollection.get().then((querySnapshot) => {
      //   querySnapshot.forEach((doc) => {
      //     var articleJson =  doc.data();
      //     firebaseArticles.push(new Article(doc.id, articleJson.title, articleJson.preview, articleJson.body, null))
      //   });
      // });
      // return firebaseArticles;
    },
  },
  async mounted() {
    this.articles = await this.fetchArticles();
  },
};
</script>

<style lang="scss" scoped>
.article-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 15%;

  .article-preview {
    animation: fadeInOpacity 2s forwards;
  }
  // .article-preview:nth-child(2){
  //   animation-delay: .5s;
  // }
}
</style>

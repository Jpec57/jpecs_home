<template>
  <div class="body">
    <div class="left-side-container"></div>
    <div class="main-container">
      <h1>News</h1>
      <div class="article-container">
        <!-- <transition-group name="list-fadein" appear> -->
          <ArticlePreview
            v-for="(article, index) in articles"
            v-bind:key="article"
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

export default {
  name: "HomePage",
  components: {
    ArticlePreview,
  },
  data() {
    return {
      hardcodedArticles: [],
      articles: articles,
    };
  },
  methods: {
    async fetchArticles() {
      // const files = await utils.getFiles(__dirname + RELATIVE_PATH_TO_MD_FILES);
      // this.articles = [
      //   new Article("First", "Hello"),
      //   new Article("Second", "Hello"),
      // ];
      console.log("fetching...");
      return articles;
    },
  },
  mounted() {
    this.fetchArticles();
  },
};
</script>

<style lang="scss" scoped>
.article-container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .article-preview {
    animation: fadeInOpacity 2s forwards;
  }
  // .article-preview:nth-child(2){
  //   animation-delay: .5s;
  // }
}
</style>

<template>
  <div class="body">
    <div class="left-side-container"></div>
    <div class="main-container">
      <h2>News</h2>
      <div class="article-container">
        <ArticlePreview
          v-for="(article, index) in articles"
          v-bind:key="article"
          :article="article"
          :id="index"
        />
        <ArticlePreview
          v-for="article in hardcodedArticles"
          v-bind:key="article"
          :article="article"
        />
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

<style>



</style>

<style lang="scss" scoped>
//600
.article-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>

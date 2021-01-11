<template>
  <div>
    <div class="article-header">
      {{ article.title }}
    </div>
    <div class="article-body">{{ article.body }}</div>
    <div class="article-footer"></div>
  </div>
</template>

<script>
import articles from "../articles/articles";
import Article from "../models/Article";
export default {
  name: "ArticlePage",
  data() {
    return {
      article: new Article("Mock article", "This is a description", "Content"),
    };
  },
  methods: {
    async fetchArticle() {
      console.log(this.$route.params);
      this.article = articles[this.$route.params.id];
      return this.article;
    },
  },
  mounted() {
    this.fetchArticle();
  },
};
</script>

<style lang="scss" scoped>
.article-header {
}
.article-body {
  vertical-align: center;
}
.article-footer {
}
</style>
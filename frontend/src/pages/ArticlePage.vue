<template>
  <div>
    <div class="article-header">
      {{ article.title }}
    </div>
    <div class="article-body" v-html="article.body"></div>
            <vue-markdown :source="mdFile"></vue-markdown>

    <div class="article-footer"></div>
  </div>
</template>

<script>
import articles from "../articles/articles";
import Article from "../models/Article";
    // import VueMarkdown from 'vue-markdown';

export default {
  name: "ArticlePage",
  data() {
    return {
      article: new Article("Mock article", "This is a description", "Content"),
      mdFile: '',

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
  created() {
      var client = new XMLHttpRequest();
      client.open('GET', '/README.md');
      let self = this;
      client.onreadystatechange = function() {
          self.mdFile = client.responseText;
      }
      client.send();
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
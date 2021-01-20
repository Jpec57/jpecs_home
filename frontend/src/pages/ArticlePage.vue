<template>
  <div>
    <div class="article-header">
      <h1 class="article-title">
      {{ article.title }}
      </h1>
    </div>
  <div class="article-body" v-html="compiledMarkdown"></div>
    <div class="article-footer"></div>
  </div>
</template>

<script>
import articles from "../articles/articles";
import Article from "../models/Article";
import marked from 'marked';


export default {
  name: "ArticlePage",
  data() {
    return {
      article: new Article("Mock article", "This is a description", "Content"),
      mdFile: '# Baby metal',

    };
  },
  methods: {
    async fetchArticle() {
      console.log(this.$route.params);
      this.article = articles[this.$route.params.id];
      return this.article;
    },
  },
  computed: {
    compiledMarkdown() {
      return marked(this.article.body, { sanitize: true });
    }
  },
  mounted() {
    this.fetchArticle();
  }
};
</script>

<style lang="scss">
.article-header {
}
.article-body {
  vertical-align: center;
}
.article-footer {
}

table {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-spacing: 0;
  td, th {
  border: 1px solid #ddd;
  padding: 8px;

  }
  th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
  }
}

pre {
  display: flex;
      justify-content: center;

code {
      background: #313131;
    border: 1px solid #ddd;
    border-left: 3px solid #afafaf;
    color: rgb(197, 197, 197);
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 1.6em;
    overflow: auto;
    padding: 1em 1.5em;
    display: flex;
    justify-content: center;
    padding-left: 10%;
    padding-right: 10%;
    word-wrap: break-word;
}
}



</style>
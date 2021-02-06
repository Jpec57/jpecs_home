<template>
  <div>
    <div class="article-header">
      <h1 class="article-title">
        {{ article.title }}
      </h1>
      <router-link to="/">
      <div class="back">
        <font-awesome-icon icon="long-arrow-alt-left" size="1x" />
        <span>
        Retour
        </span>
        </div>
      </router-link>
    </div>
    <div class="article-body" v-html="compiledMarkdown"></div>
    <div class="article-footer"></div>
  </div>
</template>

<script>
import articles from "../articles/articles";
import Article from "../models/Article";
import marked from "marked";

export default {
  name: "ArticlePage",
  data() {
    return {
      article: new Article("Mock article", "This is a description", "Content"),
      mdFile: "# Baby metal",
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
    },
  },
  mounted() {
    this.fetchArticle();
  },
};
</script>

<style lang="scss">
.article-header {
  display: flex;
  flex-direction: row;
  margin-left: 5%;
  margin-right: 5%;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
  }
  .article-title{
    display: flex;
    flex: 1;
    justify-content: center;
  }
  .back {
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
    font-size: 20px;
  }
}
@-webkit-keyframes fadinJpec {
  0% {
    opacity: 0;
    height: 0%;
    width: 50%;
  }
  100% {
    opacity: 1;
    height: 100%;
    width: 80%;
  }
}
@-moz-keyframes fadinJpec {
  0% {
    opacity: 0;
    height: 0%;
    width: 50%;
  }
  100% {
    opacity: 1;
    height: 100%;
    width: 80%;
  }
}
@-o-keyframes fadinJpec {
  0% {
    opacity: 0;
    height: 0%;
    width: 50%;
  }
  100% {
    opacity: 1;
    height: 100%;
    width: 80%;
  }
}
@keyframes fadinJpec {
  0% {
    opacity: 0;
    height: 0%;
    width: 50%;
  }
  100% {
    opacity: 1;
    height: 100%;
    width: 80%;
  }
}
.article-body {
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-right: 10%;
  text-align: justify;
  vertical-align: center;
  animation: fadinJpec 1.5s;
  overflow: hidden;
}

table {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-spacing: 0;
  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4caf50;
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

img {
  max-width: 450px;
}

p > img {
  display: flex;
  margin: auto;
}
</style>
<template>
  <div class="body">
    <div class="left-side-container"></div>
        <div class="main-container">
    <h2>News</h2>

      <div class="article-container">
      <ArticlePreview
        v-for="article in articles"
        v-bind:key="article"
        :article="article"
      />
            <ArticlePreview
        v-for="article in hardcodedArticles"
        v-bind:key="article"
        :article="article"
      />
      </div>
    </div>
        <div class="right-side-container">

        </div>

  </div>
</template>

<script>
import Article from "../models/Article";

import ArticlePreview from "../components/ArticlePreviewCard";

var utils = require('../services/utils');
// var marked = require('marked');
const RELATIVE_PATH_TO_MD_FILES = '../assets/articles';

export default {
  name: "HomePage",
  components: {
    ArticlePreview,
  },
  data() {
    return {
      hardcodedArticles: [],
      articles: [
        new Article(1, "First", "Hello"),
        new Article(2, "Second", "Hello"),
      ],
    };
  },
  methods: {
    async fetchArticles(){
      // const files = await fs.readdir(__dirname + RELATIVE_PATH_TO_MD_FILES);

      const files = await utils.getFiles(__dirname + RELATIVE_PATH_TO_MD_FILES);
      console.log(files);

var i = 0;
      var articles = [];
      files.forEach(file => {
        articles.push(new Article(i, "Article " + i, file));
        i++;
      });

// var articles = [
//         new Article(1, "First", "Hello"),
//         new Article(2, "Second", "Hello"),
//       ];
      this.hardcodedArticles = articles;
      console.log("fetching...");
      return articles;
    }
  },
  mounted() {
    const hello = "Hello World!";
    this.fetchArticles();
    console.log(hello);
    console.log(this.articles);
  },
};
</script>

<style>

/* #routing-container {
  display: flex;
  flex: 1;
} */

.router-link {
  color: white;
  padding: 10px;
}
.router-link-active {
  color: #696767;
}


.article-container{
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>

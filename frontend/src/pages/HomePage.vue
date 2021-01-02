<template>
  <div>
    <h2>News</h2>

    <div class="body">
      <ArticlePreview
        v-for="article in articles"
        v-bind:key="article"
        :article="article"
      />
    </div>
  </div>
</template>

<script>
import Article from "../models/Article";

import ArticlePreview from "../components/ArticlePreviewCard";

export default {
  name: "HomePage",
  components: {
    ArticlePreview,
  },
  data() {
    return {
      articles: [
        new Article(1, "First", "Hello"),
        new Article(2, "Second", "Hello"),
      ],
    };
  },
  mounted() {
    const hello = "Hello World!";
    console.log(hello);
    console.log(this.articles);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#routing-container {
  display: flex;
  flex: 1;
}

.router-link {
  color: white;
  padding: 10px;
}
.router-link-active {
  color: #696767;
}

#bannier {
  background-color: #0f3057;
  color: #e7e7de;
  padding: 20px;
  border-radius: 5px;
}

.body {
  margin-left: 30px;
  margin-right: 30px;
}
</style>

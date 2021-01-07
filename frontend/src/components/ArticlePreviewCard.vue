<template>
    <div class="article-preview">

  <router-link :to="'/article/' + article.id">
      <div>
        <img
          alt="img"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cb6d15ee-9f60-434a-9a5d-d91026e33e0a/d7til5w-2f3260a3-7092-47b4-aad3-d921b361cc4b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvY2I2ZDE1ZWUtOWY2MC00MzRhLTlhNWQtZDkxMDI2ZTMzZTBhXC9kN3RpbDV3LTJmMzI2MGEzLTcwOTItNDdiNC1hYWQzLWQ5MjFiMzYxY2M0Yi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Mu3saLvb8Mln3Cw5Ue1sypPqHFCVAyVrtYuYSmqle_w"
        />
      </div>
      <div class="article-preview-content">
        <div class="article-preview-header" v-on:click="show(article)">
          {{ article.title }}
        </div>
        <div class="article-preview-body">
          
          Afin d'aligner verticalement la boîte d'un élément en ligne à l'intérieur de la boîte en ligne de son conteneur (par exemple pour aligner verticalement une image (<img> sur une ligne de texte)
ou pour aligner verticalement le contenu d'une cellule dans un tableau
        </div>
      </div>
        </router-link>

    </div>
</template>
<script>
import Article from "../models/Article";

export default {
  name: "ArticlePreviewCard",
  props: { article: Article },
  methods: {
    show: function (article) {
      return console.log(article);
    },
  },
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;
  display: flex;
}
img {
  height: 100%;
}
.article-preview-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.article-preview {
  background-color: #e7e7de;
      box-shadow: 7px 7px 5px grey;

  display: flex;
  border-radius: 10px;
    max-height: 200px;
        max-width: 1000px;
        margin: auto;
          margin-bottom: 30px;



  overflow: hidden;

  .article-preview-header {
    padding: 10px;
    font-weight: bold;
    background-color: #0f3057;
    color: white;
  }
  .article-preview-body {
    padding: 30px;
  }
}
</style>
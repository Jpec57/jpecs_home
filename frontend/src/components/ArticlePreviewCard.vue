<template>
  <router-link
    :to="'/article/' + article.slug + '/' + id"
    tag="div"
    custom
    v-slot="{ navigate }"
  >
    <div role="link" class="article-preview" @click="navigate">
      <div class="image-container">
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
          {{ article.preview }}
          <!-- Afin d'aligner verticalement la boîte d'un élément en ligne à
          l'intérieur de la boîte en ligne de son conteneur (par exemple pour
          aligner verticalement une image (<img /> sur une ligne de texte) ou
          pour aligner verticalement le contenu d'une cellule dans un tableau -->
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
import Article from "../models/Article";

export default {
  name: "ArticlePreviewCard",
  props: { article: Article, id: Number },
  methods: {
    show: function (article) {
      return console.log(article);
    },
  },
};
</script>
<style lang="scss" scoped>
.article-preview {
  max-width: 1000px;
  background-color: #e7e7de;
  box-shadow: 7px 7px 5px grey;
  display: flex;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 30px;
  overflow: hidden;
  cursor: pointer;
  @media screen and (min-width: 1200px) {
    min-width: 1000px;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }

  .image-container {
    display: flex;
    img {
      object-fit: cover;
    }
    background-color: #0f3057;
    @media screen and (max-width: 600px) {
      justify-content: center;
    }
  }

  .article-preview-header {
    padding: 10px;
    font-weight: bold;
    background-color: #0f3057;
    color: white;
  }
  .article-preview-body {
    padding: 30px;
  }

  .article-preview-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    @media screen and (min-width: 600px) {
      min-width: 300px;
    }
  }
}
</style>
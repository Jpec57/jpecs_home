<template>
  <div class="f-col">
    <div class="reading-progress">
      <div class="read-indicator" v-bind:style="{ width: readingProgress + '%'}" />
    </div>
    <div class="article-header">
      <h1 class="article-title">
        {{ article.title }}
      </h1>
      <router-link to="/" v-if="window.width > 600">
        <div class="back">
          <font-awesome-icon icon="long-arrow-alt-left" size="1x" />
          <span> Retour </span>
        </div>
      </router-link>
    </div>
    <span class="italic">{{
      article.createdAt &&
      article.createdAt.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    }}</span>
        <span class="reading-time">Estimated reading time: <span class="bold">{{readingTime}} minutes</span></span>

<!-- MOBILE  -->
        <div class="like-button-long" @click="likeArticle" v-if="window.width <= 1000">
          <font-awesome-icon icon="thumbs-up" size="2x" />
          <span>{{ likeNb }} like{{ likeNb > 1 ? "s" : "" }}</span>
        </div>
<!-- END  -->


    <div class="f-center">
      <router-link to="/" v-if="window.width <= 600">
        <div class="back">
          <font-awesome-icon icon="long-arrow-alt-left" size="1x" />
          <span> Retour </span>
        </div>
      </router-link>
    </div>
    <div class="f-row flex-1">
      <div class="left-side-container" v-if="window.width > 1000">
        <div class="like-button" @click="likeArticle">
          <font-awesome-icon icon="thumbs-up" size="2x" />
          <span>{{ likeNb }} like{{ likeNb > 1 ? "s" : "" }}</span>
        </div>
      </div>
      <div class="article-body" v-html="compiledMarkdown"></div>
      <div class="right-side-container" v-if="window.width > 600"></div>
    </div>

    <div class="f-row flex-1">
      <div class="left-side-container" v-if="window.width > 1000"></div>
      <div class="article-footer">
        <!-- MOBILE  -->
        <div class="like-button-long" @click="likeArticle" v-if="window.width <= 1000">
          <font-awesome-icon icon="thumbs-up" size="2x" />
          <span>{{ likeNb }} like{{ likeNb > 1 ? "s" : "" }}</span>
        </div>
<!-- END  -->
        <CommentSection
          v-if="article && article.slug && article.slug.length > 0"
          v-bind:ref="article.slug"
        />
      </div>
      <div class="right-side-container" v-if="window.width > 1000"></div>
    </div>
  </div>
</template>

<script>
import articles from "../articles/articles";
import Article from "../models/Article";
import marked from "marked";
import {
  likesOrNotArticle,
  //  isLikedByUser,
  getLikes,
} from "../services/repositories/like_repo";
import CommentSection from "../components/comment/CommentSection";

export default {
  name: "ArticlePage",
  components: { CommentSection },
  data() {
    return {
      article: new Article(
        0,
        "Mock article",
        "This is a description",
        "Content",
        null
      ),
      mdFile: "# Baby metal",
      window: {
        width: 0,
        height: 0,
        percentY: 0,
        scrollMaxY: 0,
      },
      likeNb: 0,
    };
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    handleScroll (){
      this.window.scrollY = window.scrollY;
      this.window.scrollMaxY = document.querySelector('.article-body').scrollHeight
    },
    async fetchArticle() {
      articles.forEach((article) => {
        if (article.slug == this.$route.params.slug) {
          this.article = article;
          return;
        }
      });
    },
    async fetchLikeNb() {
      var count = 0;
      await getLikes(this.$route.params.slug).then((querySnapshot) => {
        querySnapshot.forEach(() => {
          count++;
        });
        this.likeNb = count;
      });
    },
    async likeArticle() {
      await likesOrNotArticle(this.$route.params.slug).then(() => {
        this.likeNb = this.likeNb + 1;
      });
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.article.body);
    },
    readingProgress (){
      var percent = Math.ceil(this.$data.window.scrollY / this.$data.window.scrollMaxY * 100);
      if (percent > 100){
        return 100;
      }
      return percent;
    },
    readingTime () {
      let minutes = 0;
      const contentString = JSON.stringify(this.article.body);
      const words = contentString.split(" ").length;
      const wordsPerMinute = 220;
      minutes = Math.ceil(words / wordsPerMinute);
      return minutes;
    }
  },
  mounted() {
    this.fetchArticle();
    this.fetchLikeNb();
    this.$data.window.scrollMaxY = document.querySelector('.article-body').scrollHeight
  },
  created() {

    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss">
@-webkit-keyframes fadinJpec {
  0% {
    opacity: 0;
    height: 0%;
    width: 15%;
  }
  100% {
    opacity: 1;
    height: 100%;
    width: 100%;
  }
}
@-moz-keyframes fadinJpec {
  0% {
    opacity: 0;
    height: 0%;
    width: 15%;
  }
  100% {
    opacity: 1;
    height: 100%;
    width: 100%;
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
    width: 100%;
  }
}
@keyframes fadinJpec {
  0% {
    opacity: 0;
    height: 0%;
    width: 15%;
  }
  100% {
    opacity: 1;
    height: 100%;
    width: 100%;
  }
}
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
  .article-title {
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

    .reading-time{
    margin-top: 5px;
    
  }

.article-body {
  display: flex;
  flex-direction: column;
  max-width: 900px;
  text-align: justify;
  justify-content: center;
  vertical-align: center;
  animation: fadinJpec 3s;
  overflow: hidden;
  @media screen and (max-width: 1200px) {
    padding-left: 5%;
    padding-right: 5%;
  }

}
.f-center {
  a {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
}
.article-footer {
  padding-top: 5%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
  flex: 3;
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
  width: 100%;
}
blockquote {
  border: 1px dotted grey;
  font-style: italic;
  margin: 0;
  padding: 2em;
  background: #ffeace9e;
}
a {
  color: #3a3838;
  &:hover {
    color: black;
    font-weight: bold;
  }
  text-decoration: none;
  font-style: italic;
  font-weight: 600;
}

.like-button, .like-button-long{
  background-color: #0f3057;
  cursor: pointer;
  align-items: center;
  //darkorange
  color: white;
  padding: 1.5em 2em;
  border-radius: 20%;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  span {
    margin-top: 0.5em;
  }
}

.like-button {
      position: fixed;
}

.like-button-long {
  width: 50%;
  padding: 0.5em 1em;
  border-radius: 5px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
}

.reading-progress{
  width: 100%;
  height: 5px;
  background: #3a3838;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-start;
  .read-indicator{
    background: green;
    // width: 40%;
    height: 5px;
  
  }
}
</style>
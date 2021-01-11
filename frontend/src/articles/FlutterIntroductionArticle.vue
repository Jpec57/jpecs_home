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
    <div class="right-side-container"></div>
  </div>
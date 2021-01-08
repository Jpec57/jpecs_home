<template>
  <div>
    <div class="article-header">
      {{ article.title }}
    </div>
    <div class="article-body">Content</div>
    <div class="article-footer"></div>
  </div>
</template>
<script>

export default {
  name: "Article",
  props: ["article"],
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
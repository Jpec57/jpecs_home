<template>
  <div class="">
      {{}}
            <div class="preview-article-body" v-html="compiledMarkdown"></div>

  </div>
</template>

<script>
import marked from "marked";

export default {
    name: "CreateArticlePage",
    data() {
        return {
            title: "",
            preview: "",
            mdContent: "",
            tags: [],
        };
    },
    methods: {
        
    },
      computed: {
    compiledMarkdown() {
      return marked(this.mdContent);
    },
  },
}
</script>

<style>

</style>
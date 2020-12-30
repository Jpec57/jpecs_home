<template>
  <div class="module" v-on:click="console.log(title)">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "Module",
  props: {
    title: String,
    path: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.module {
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 50px;
  border-radius: 5px;
  margin: 10px;
  font-weight: bold;
  background-color: #e7e7de;
  color: #696767;
}
</style>

<template>
  <router-link :to="{ path: path }" class="router-link">
    <div class="module">
      {{ title }}
    </div>
  </router-link>
</template>

<script>
export default {
  name: "NavBarLink",
  props: {
    title: String,
    path: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 5px 0 0;
}
a {
  text-decoration: none;
}

.router-link {
  background-color: #e7e7de;
  color: #696767;
  padding: 10px;
  font-weight: bold;

  border-radius: 5px;
  margin: 10px;
}
.router-link-active {
  background-color: #696767;
  color: white;
}
</style>

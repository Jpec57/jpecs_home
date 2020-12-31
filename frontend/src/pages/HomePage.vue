<template>
  <div>Contenu</div>
</template>

<script>
export default {
  name: "HomePage",
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
</style>

<template>
  <div>
    <div id="bannier">
      <h1>Jpec's Training Home</h1>
    </div>
    <div id="routing-container">
      <Module title="Training" />
      <Module title="Japanese" />
      <Module title="Math" />
    </div>
  </div>
</template>

<script>
import Module from "../components/Module.vue";

export default {
  name: "TrainingHomePage",
  components: {
    Module,
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

#bannier {
  background-color: #0f3057;
  color: #e7e7de;
  padding: 20px;
  border-radius: 5px;
}
</style>

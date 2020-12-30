<template>
  <div>
    <div id="bannier">
      <h1>Jpec's Home</h1>
    </div>
    <div id="menu-container">
      <h2>Menu</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/japanese">Japanese</router-link>
    </div>
    <router-view />
    <div id="routing-container">
      <Module title="Training" />
    </div>
  </div>
</template>

<script>
import Module from "../components/Module.vue";

export default {
  name: "App",
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

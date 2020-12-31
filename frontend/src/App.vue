<template>
  <div>
    <div id="bannier">
      <h1>Jpec's Home</h1>
      <NavBar />
    </div>
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/Navigation";
export default {
  name: "App",
  components: {
    NavBar,
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
</style>

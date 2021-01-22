<template>
  <div>
    <div id="bannier">
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

.flex-1{
  display: flex;
  flex: 1;
}
.flex-4{
  display: flex;
  flex: 4;
}

#bannier {
  display: flex;
  background-color: #0f3057;
  color: #e7e7de;
  box-shadow: 0 5px 5px grey;
}

.left-side-container, .right-side-container {
  display: flex;
  flex: 1;
}

.main-container{
  display: flex;
    flex: 4;
    flex-direction: column;
}

h3 {
  text-decoration: underline;
}

</style>

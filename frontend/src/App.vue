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
  border-radius: 5px;
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

</style>

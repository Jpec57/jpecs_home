<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <JpecComponent msg="Its working!"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import JpecComponent from './components/JpecComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    JpecComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

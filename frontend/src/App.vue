<template>
<div>

  <JpecComponent msg="Its working!"/>
      <JpecModule title="Japanese"/>
    <JpecModule title="Training"/>
    <JpecModule title="Math"/>

</div>
</template>

<script>
import JpecComponent from './components/JpecComponent.vue'
import JpecModule from './components/JpecModule.vue'

export default {
  name: 'App',
  components: {
    JpecComponent,
    JpecModule
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

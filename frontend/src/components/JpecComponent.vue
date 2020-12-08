<template>
  <div class="hello">
    <h1>Val{{val}} - {{ msg }}</h1>
    Toto 
  </div>
</template>

<script>
export default {
  name: 'JpecComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

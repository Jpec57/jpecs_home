<template>
    <div class="module">

  <router-link :to="{ path: path }" class="router-link">
      <div class="icon">
                  <font-awesome-icon :icon="icon" size="1x" />
      </div>
  
      {{ title }}
  </router-link>
      </div>

</template>

<script>
export default {
  name: "NavBarLink",
  props: {
    title: String,
    path: String,
        icon: String,

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
  border :1px solid #696767;
  color: #696767;
  padding: 10px;
  font-weight: bold;
  border-radius: 5px;
      border-bottom: none;
    border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;

  margin-left: 10px;
  margin-right: 10px;

  text-decoration: none;

}
.router-link-active {
  background-color: #696767;
  color: white;
}

.icon{
      margin-bottom: 5px;
}

.module{
  display: flex;
  flex-direction: column;
      align-items: center;
}
</style>

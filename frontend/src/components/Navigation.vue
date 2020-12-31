<template>
  <div id="routing-container">
    <router-link to="/" class="router-link icon">
      <font-awesome-icon icon="home" size="2x" />
    </router-link>
    <NavBarLink title="Japanese" path="/japanese" />
    <NavBarLink title="Workout" path="/fitness" />
    <NavBarLink title="Math" path="/math" />
  </div>
</template>

<script>
import NavBarLink from "./NavBarLink.vue";

export default {
  name: "NavBar",
  components: {
    NavBarLink,
  },
};
</script>

<style scoped>
#routing-container {
  display: flex;
  flex: 1;
  justify-content: center;
  align-content: center;
  align-items: center;
}

#bannier {
  background-color: #0f3057;
  color: #e7e7de;
  padding: 5px;
  border-radius: 5px;
}

.icon {
  margin-right: 10px;
}

#routing-container {
  display: flex;
  flex: 1;
}
.icon.router-link {
  color: #e7e7de;
  padding: 10px;
}
.icon.router-link-active {
  color: #696767;
}
</style>

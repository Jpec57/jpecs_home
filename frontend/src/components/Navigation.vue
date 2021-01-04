<template>
  <div id="routing-container">
              <router-link to="/" class="router-link icon">
      <h1>Jpec's Home</h1>
    </router-link>
    <NavBarLink title="Japanese" path="/japanese" icon="globe-asia" />
    <NavBarLink title="Workout" path="/fitness" icon="dumbbell" />
    <NavBarLink title="Math" path="/math" icon="calculator"/>
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

.router-link {
    text-decoration: none;
}
</style>

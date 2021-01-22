<template>
  <div id="routing-container">
    <div class="flex-1">
    <router-link to="/" class="router-link icon main-link">
      <h1>Jpec's Home</h1>
    </router-link>
    </div>
        <div class="flex-4 module-link-container">
    <NavBarLink title="Japanese" path="/japanese" icon="globe-asia" />
    <NavBarLink title="Workout" path="/fitness" icon="dumbbell" />
    <NavBarLink title="Math" path="/math" icon="calculator"/>
    </div>

    <div class="flex-1">

    </div>
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

#bannier {
  background-color: #0f3057;
  color: #e7e7de;
  border-radius: 5px;
}

.icon {
  margin-right: 10px;
}

.main-link{
  margin-right: 2em;
}

.module-link-container{
  justify-content: start;
      flex-wrap: wrap;
}
#routing-container {
  display: flex;
  flex: 1;
  align-items: flex-end;
}
.icon.router-link {
  color: #e7e7de;
}
.icon.router-link-active {
  color: #696767;
}

.router-link {
    text-decoration: none;
}
</style>

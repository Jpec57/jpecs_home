<template>
          <NavBarLink title="Japanese" path="/japanese" icon="globe-asia" />
        <NavBarLink title="Workout" path="/fitness" icon="dumbbell" />
        <NavBarLink title="Math" path="/math" icon="calculator" />
</template>

<script>
import NavBarLink from "./NavBarLink.vue";

export default {
    name: "NavBar",
      components: {
    NavBarLink,
  },
}
</script>

<style lang="scss" scoped>

</style>
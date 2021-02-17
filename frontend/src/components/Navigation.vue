<template>
  <div class="f-col flex-1">
    <div id="routing-container">
      <div class="icon">
        <router-link to="/" class="router-link" v-slot="{ navigate }">
          <div id="logo-container" @click="navigate" role="link">
            <img
              alt="logo"
              src="/images/app_icon.png"
              height="100"
              width="100"
            />
          </div>
        </router-link>
      </div>
      <!-- COMPUTER -->
      <div class="main-menu" v-if="window.width > 600">
        <h1>Jpec's Home</h1>
        <div class="module-link-container">
                  <NavBar/>

          <!-- <NavBarLink title="Japanese" path="/japanese" icon="globe-asia" />
          <NavBarLink title="Workout" path="/fitness" icon="dumbbell" />
          <NavBarLink title="Math" path="/math" icon="calculator" /> -->
        </div>
      </div>

      <div class="flex-1 login-container" v-if="window.width > 600">
        <div class="hidden">
          <font-awesome-icon icon="user" size="2x" />
        </div>
      </div>
      <!-- END COMPUTER -->
      <!-- MOBILE -->
      <div
        class="flex-4 f-row website-name-container"
        v-if="window.width <= 600"
      >
        <h1>Jpec's Home</h1>
      </div>
      <div class="flex-1" v-if="window.width <= 600">
        <div class="module-link-container">
          <font-awesome-icon
            icon="bars"
            size="2x"
            @click="showNav = !showNav"
          />
        </div>
      </div>
    </div>
    <div class="mobile-nav-container" v-if="window.width <= 600">
      <div v-show="showNav" class="floating-menu">
        <NavBar/>
        <!-- <NavBarLink title="Japanese" path="/japanese" icon="globe-asia" />
        <NavBarLink title="Workout" path="/fitness" icon="dumbbell" />
        <NavBarLink title="Math" path="/math" icon="calculator" /> -->
      </div>
    </div>
    <!-- END MOBILE -->
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  name: "Navigation",
  components: {
    NavBar
  },
  data() {
    return {
      showNav: false,
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
};
</script>

<style scoped lang="scss">
#bannier {
  background-color: #0f3057;
  color: #e7e7de;
}
h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 2em;
}
.icon {
  padding: 10px;
  display: flex;
  margin-right: 10px;
  justify-content: center;
  align-items: flex-end;
}

#routing-container {
  display: flex;
  flex: 1;

  .module-link-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    flex: 1;
    align-items: flex-end;
  }
  @media screen and (max-width: 600px) {
    .module-link-container {
      align-items: center;
    }
  }

  .main-menu {
    display: flex;
    flex-direction: column;
    flex: 8;
  }

  .website-name-container {
    justify-content: center;
    align-items: center;
  }
  .login-container{
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
}
.icon.router-link {
  color: #e7e7de;
}

.floating-menu {
  z-index: 10;
  background-color: #0f3057;
  padding: 5px;
  border-radius: 10px;
  top: 50px;
  div {
    margin-bottom: 10px;
  }
}

.router-link {
  text-decoration: none;
  width: 70px;
}
</style>

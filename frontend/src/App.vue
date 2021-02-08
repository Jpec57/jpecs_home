<template>
  <div id="app-content">
    <div id="bannier">
      <Navigation />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  name: "App",
  components: {
    Navigation,
  },
  watch: {
      '$route' (to) {
        document.title = to.meta.title || "Jpec's Home"
      }
    },
};
</script>

<style>
/*
  Animations definition
*/
.fade-in {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 2s;
}

@keyframes fadeInOpacity {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
/*
  Fonts definition
*/
@font-face {
  font-family: titleFont;
  src: url('/fonts/lobster-regular.ttf');
}

h1 {
  font-family: titleFont;
  font-size: 2.5em;
}
h2 {
  font-family: titleFont;
  font-size: 2em;
}

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
  box-shadow: 0 5px 5px grey;
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

h3 {
  text-decoration: underline;
}

html, body, #app, #app-content {
  margin: 0;
  height: 100%;
}


.body{
    display: flex;
}

.router-link {
  color: white;
  padding: 10px;
}
.router-link-active {
  color: #696767;
}

.f-col{
  display: flex;
  flex-direction: column;
}
.f-row{
  display: flex;
  flex-direction: row;
}

.f-center{
  display: flex;
  justify-content: center;
}
</style>

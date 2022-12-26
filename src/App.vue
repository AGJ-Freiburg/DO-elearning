<template>
  <div id="app">
    <TheIndex></TheIndex>
  </div>
</template>

<script>
import TheIndex from "./components/TheIndex.vue";

export default {
  name: "App",
  components: {
    TheIndex,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  overflow: hidden !important;
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden !important;
}

</style>

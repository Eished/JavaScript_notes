<template>
  <div id="app">
    <!-- <List /> -->
    <!-- <Proxy /> -->
    <Author />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import List from './components/list.vue'
// import Proxy from './components/proxy'
import Author from './components/author'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    // List,
    // Proxy,
    Author
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

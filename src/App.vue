<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <UserComponent/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import UserComponent from './components/UserComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    UserComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

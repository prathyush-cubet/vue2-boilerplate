<template>
  <div id="app">

    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>

        <router-link class="col" to="/products">Products</router-link>
        <router-link class="col" to="/users">Users</router-link>
        <router-link class="col" to="/example">Props&Emits</router-link>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</div>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.active {
  font-weight: 700;
  color:#fff
}
</style>

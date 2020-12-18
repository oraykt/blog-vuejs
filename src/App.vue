<template>
  <div id="app">
    <div id="nav">
      <b-navbar type="dark" variant="info">
        <router-link :to="{name:'Home'}" class="navbar-brand" target="_self">{{this.appName}}</router-link>
        <b-navbar-nav>
          <router-link :to="{name: 'Home'}" active-class="active" exact tag="li">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link :to="{name: 'About'}" active-class="active" tag="li">
            <a class="nav-link">About</a>
          </router-link>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState(['appName'])
  }
}
</script>

<style>
#app {
  margin: 0 60px;
}
h1 {
  margin-bottom: 20px;
}
#nav {
  margin-bottom: 40px;
}
</style>

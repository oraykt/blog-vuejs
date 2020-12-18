<template>
  <div id="app">
    <div id="nav">
      <b-navbar type="dark" variant="info">
        <b-navbar-brand>VueBlog</b-navbar-brand>
        <b-navbar-nav>
          <router-link to="/" active-class="active" exact tag="li">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link to="/about" active-class="active" tag="li">
            <a class="nav-link">About</a>
          </router-link>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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

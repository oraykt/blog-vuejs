<template>
  <div id="app">
    <div id="nav">
      <b-navbar type="dark" variant="info">
        <router-link :to="{name:'Home'}" class="navbar-brand" target="_self">Vue Blog</router-link>
        <b-navbar-nav>
          <router-link :to="{name: 'Home'}" active-class="active" exact tag="li">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link :to="{name: 'About'}" active-class="active" tag="li">
            <a class="nav-link">About</a>
          </router-link>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit.prevent="onSubmit">
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="searchTerm"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      searchTerm: ''
    }
  },
  methods: {
    onSubmit () {
      this.$router.push({ name: 'Search', query: { q: this.searchTerm } })
    }
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

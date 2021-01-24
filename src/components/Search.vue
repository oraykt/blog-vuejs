<template>
<b-container class="blog-list">
    <b-row>
      <b-col cols="12">
        <h1>Search</h1>
      </b-col>
      <b-col cols="12" sm="6" md="4" v-for="item in filteredResults" :key="item.id">
        <router-link :to="{ name: 'BlogDetail', params: { id: item.id } }" class="blog-cell">
          <figure>
            <img :src="item.img" :alt="item.imgAlt" class="blog-cell__img">
            <figcaption class="blog-cell__caption">
              <div class="blog-cell__content">
                <h2 class="blog-cell__title">{{item.title}}</h2>
                <div class="blog-cell__meta">by {{item.author}}</div>
              </div>
            </figcaption>
          </figure>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {entries} from '../../static/api/entries.json'

export default {
  data () {
    return {
      searchTerm: this.$route.query.q,
      entries: []
    }
  },
  watch: {
    $route (to, from) {
      this.searchTerm = this.$route.query.q
    }
  },
  computed: {
    filteredResults () {
      return this.entries.filter(entry => ~entry.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()))
    }
  },
  created () {
    this.entries = entries
  }
}
</script>

<style>
#search-field {
  margin-bottom: 60px;
}
</style>

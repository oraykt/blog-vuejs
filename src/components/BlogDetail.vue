<template>
  <div class="blog-detail">
    <b-container>
      <b-row>
        <b-col>
          <router-link :to="{name:'Home'}" class="blog-detail__back-link">Back</router-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="5">
          <img class="blog-detail__img " :src="entry.img" :alt="entry.imgAlt">
        </b-col>
        <b-col cols="12" md="7">
          <div class="blog-detail__content">
            <h1 >{{entry.title}}</h1>
            <p class="blog-detail__subtitle">by {{entry.author}} - <time>{{entry.date}}</time></p>
            <p class="blog-detail__text">
              {{entry.text}}
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {entries} from '../../static/api/entries.json'

export default {
  data () {
    return {
      id: this.$route.params.id,
      entry: {}
    }
  },
  created () {
    this.entry = entries.find(x => x.id === parseInt(this.id))
  }
}
</script>

<style>
  .blog-detail__back-link {
    margin-bottom: 20px;
    display: inline-block;
    font-size: 18px;
  }

  .blog-detail__img {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }

  .blog-detail__content > h2 {
    margin-top: 0;
  }

  .blog-detail__subtitle {
    color: #aaa;
  }
</style>

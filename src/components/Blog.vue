<template>
  <div>
    <b-container class="blog-list">
      <b-row>
        <b-col cols="12">
          <h1>Home</h1>
        </b-col>
        <b-col cols="12" sm="6" md="4" v-for="item in entries" :key="item.id">
          <router-link :to="{name:'BlogDetail', params: { id: item.id }}" class="blog-cell">
            <figure>
              <img :src="item.img" :alt="item.imgAlt" class="blog-cell__img" />
              <figcaption class="blog-cell__caption">
                <div class="blog-cell__content">
                  <h2 class="blog-cell__title">{{ item.title }}</h2>
                  <div class="blog-cell__meta">by {{ item.author }}</div>
                </div>
              </figcaption>
            </figure>
          </router-link>
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
      entries: []
    }
  },
  created () {
    this.entries = entries
  }
}
</script>

<style>
.blog-cell {
  position: relative;
  overflow: hidden;
  display: block;
  margin-bottom: 1rem;
}

.blog-cell__caption {
  color: white;
  font-weight: bold;
  font-size: 18px;
}

.blog-cell__img {
  width: calc(100% + 50px);
  height: auto;
  transition: opacity 0.35s, transform 0.35s;
  opacity: 0.7;
  transform: translate3d(-40px, 0, 0);
}

.blog-cell__title {
  transition: transform 0.35s;
}

.blog-cell__content {
  position: absolute;
  top: 0;
  right: 0;
  padding: 2em;
  width: 100%;
  height: 50%;
}

.blog-cell__user-link {
  color: white;
}

.blog-cell__user-link:hover {
  text-decoration: underline;
  color: white;
}

.blog-cell__meta {
  opacity: 0;
  transition: opacity 0.3s, transform 0.35s;
}

.blog-cell__title,
.blog-cell__meta {
  transform: translate3d(0, 40px, 0);
  text-shadow: 1px 1px 20px #000;
}

.blog-cell:hover .blog-cell__img,
.blog-cell:hover .blog-cell__meta {
  opacity: 0.9;
}

.blog-cell:hover .blog-cell__img,
.blog-cell:hover .blog-cell__title,
.blog-cell:hover .blog-cell__meta {
  transform: translate3d(0, 0, 0);
}

.blog-cell:hover .blog-cell__meta {
  transition-delay: 0.06s;
}
</style>

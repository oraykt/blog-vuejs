<template>
  <div class="blog-detail">
    <b-container>
      <b-row>
        <b-col>
          <router-link :to="{name:'Home'}" class="blog-detail__back-link">
            <b-button variant="info"> ⇐ Back</b-button>
          </router-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="5">
          <img class="blog-detail__img " :src="entry.img" :alt="entry.imgAlt">
        </b-col>
        <b-col cols="12" md="7">
          <div class="blog-detail__content">
            <h1 v-if="!editMode">{{entry.title}}</h1>
            <b-form-input v-else v-model="entry.title" type="text" placeholder="Enter Title" class="input-text"></b-form-input>
            <p class="blog-detail__subtitle">by {{entry.author}} - <time>{{entry.date}}</time></p>
            <p class="blog-detail__text" v-if="!editMode">
              {{entry.text}}
            </p>
            <b-form-textarea v-else v-model="entry.text" class="input-textarea" placeholder="Enter Post"></b-form-textarea>
            <b-link href="" role="button" v-if="!editMode" variant="link" @click="onEdit">Edit</b-link>
            <div v-else>
              <b-button variant="primary" @click="onSave">Save</b-button>
              <b-button variant="danger" @click="onCancel">Cancel</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import db from '../firebase'

export default {
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      entry: {},
      editMode: false
    }
  },
  methods: {
    fetchEntry () {
      db.ref(`entries/${this.index}`).on('value', snap => {
        this.entry = snap.val()
      })
    },
    onEdit () {
      this.editMode = true
    },
    onSave () {
      // Firebase Edit Integration
      this.editMode = false
    },
    onCancel () {
      this.editMode = false
    }
  },
  created () {
    this.fetchEntry()
  },
  watch: {
    '$route' (to, from) {
      this.index = to.params.index
      this.fetchEntry()
    }
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

  input.input-text,
  input.input-text:focus{
    font-size: 2.5rem;
    padding: 5px 10px;
    line-height: 1;
    width: 100%;
    height: auto;
    display: block;
    font-weight: 500;
    margin-bottom: 20px;
    color:#212529;
  }

  textarea.input-textarea,
  textarea.input-textarea:focus{
    display:block;
    widows: 100%;
    height: 18rem;
    margin-bottom: 20px;
    padding: 5px 10px;
    color: #212529;
  }
</style>

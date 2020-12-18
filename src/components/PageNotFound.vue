<template>
  <b-container>
    <b-row>
      <b-col>
        <b-alert show variant="info">The page you are looking for doesn't exist.</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <router-link :to="{name:'Home'}" class="blog-detail__back-link">
        <b-button variant="info"> ⇐ Back</b-button>
      </router-link>
    </b-row>
  </b-container>
</template>

<script>
export default {

}
</script>

<style>

</style>

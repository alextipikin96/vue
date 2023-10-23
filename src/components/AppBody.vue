<template>
  <div class="app-main">
    <MovieList />
  </div>
</template>

<script lang="ts">
import MovieList from './MovieList.vue';

export default {
  components: {
    MovieList
  }
}
</script>

<style>
.app-main {
  padding: 32px;
}
</style>
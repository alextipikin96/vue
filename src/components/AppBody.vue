<template>
  <body class="app-body">
    <MovieList />
  </body>
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
.app-body {
  padding: 32px;
}
</style>
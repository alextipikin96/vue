<template>
  <li class="movie-item">
    <img :src="'/src/assets/img/poster-placeholder.jpeg'" :data-srcset="movie.posterurl" :alt="movie.title" v-lazyload>
    <div class="movie-item--desc">
      <span>{{ movie.title }}</span>
      <span class="movie-item--desc-date">{{ movie.year }}</span>
    </div>
    <span>{{ movie.genres.toString() }}</span>
  </li>
</template>

<script lang="ts">
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style>
.movie-item {
  display: flex;
  flex-direction: column;
}

.movie-item--desc {
  display: flex;
  justify-content: space-between;
  padding: 20px 0 5px;
}

.movie-item--desc-date {
  border: 1px solid;
  border-radius: 5px;
  padding: 0 10px;
}

.movie-item img {
  width: 300px;
  height: 400px;
}
</style>
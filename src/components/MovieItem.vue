<template>
  <li class="movie-item">
    <img :src="`src/assets/img/movies/${movie.id + 1}.jpeg`" :alt="movie.title">
    <div class="movie-item--desc">
      <span>{{ movie.title }}</span>
      <span class="movie-item--desc-date">{{ movie.date }}</span>
    </div>
    <span>{{ movie.desc }}</span>
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
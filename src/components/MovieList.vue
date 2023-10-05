<template>
  <ul class="movie-list">
    <MovieItem v-for="movie in movies" :key="movie.id" :movie="movie"></MovieItem>
  </ul>
</template>

<script lang="ts">
import { ref } from 'vue';
import MovieItem from './MovieItem.vue';

export default {
  components: { MovieItem },
  setup() {
    const movies = ref([
      {
        id: 0,
        title: "Pulp Fiction",
        desc: "Action and Adventure",
        // src: ,
        date: 1994
      },
      {
        id: 1,
        title: "Bohemian Rapsody",
        desc: "Drama, Biography, Music",
        // src: ,
        date: 2018
      },
      {
        id: 2,
        title: "Kill Bill: Vol 2",
        desc: "Oscar winning Movie",
        // src: ,
        date: 2004
      },
      {
        id: 3,
        title: "Avegers: War of infinity",
        desc: "Action & Adventure",
        // src: ,
        date: 2018
      },
      {
        id: 4,
        title: "Inception",
        desc: "Action & Adventure",
        // src: ,
        date: 2010
      },
      {
        id: 5,
        title: "Reservior Dogs",
        desc: "Oscar winnig Movie",
        // src: ,
        date: 1992
      },
    ]);

    return { movies }
  }
}
</script>

<style>
.movie-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 55px;
}
</style>
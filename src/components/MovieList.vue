<template>
  <SearchBar v-model="search" secondary placeholder="search" />
  <ul class="movie-list">
    <div v-if="loading">...loading</div>
    <div v-else-if="!filteredMovies.length">no movie found</div>
    <MovieItem v-for="movie in filteredMovies" :key="movie.id" :movie="movie"></MovieItem>
    <div v-if="error">Error: {{ error }}</div>
  </ul>
</template>

<script lang="ts">
import { onMounted } from 'vue'
import MovieItem from './MovieItem.vue';
import { useMovies, useSearch } from './composables'
import SearchBar from '@/stories/SearchBar.vue';

export default {
  components: { MovieItem, SearchBar },

  setup() {
    const { state, fetchMovies } = useMovies();
    const { movies, loading, error } = state;
    const { searchText: search, searchResults: filteredMovies } = useSearch(movies);

    onMounted(() => {
      fetchMovies()
    })

    return {
      search,
      fetchMovies,
      filteredMovies,
      movies, loading, error
    }
  }
}
</script>

<style>
.movie-list {
  padding-top: 20px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 55px;
}
</style>
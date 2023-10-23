import type { IMovie, IState } from '@/interfaces/movie'
import type { Ref } from 'vue'
import { reactive, toRefs, ref, computed } from 'vue'

type StateRef = {
  [K in keyof IState]: Ref<IState[K]>
}

export const useMovies = (): { state: StateRef; fetchMovies: () => void } => {
  const state = reactive<IState>({
    movies: [],
    loading: false,
    error: null
  })
  const fetchMovies = () => {
    state.loading = true
    fetch('https://tame-erin-pike-toga.cyclic.app/movies')
      .then((response) => response.json())
      .then((json) => (state.movies = json))
      .catch((error) => (state.error = error))
      .finally(() => (state.loading = false))
  }

  return {
    state: toRefs(state),
    fetchMovies
  }
}

export const useSearch = (movies) => {
  const searchText = ref('')
  const searchResults = computed(() =>
    movies.value.filter(({ title }) => title.toLowerCase().includes(searchText.value.toLowerCase()))
  )

  return {
    searchText,
    searchResults
  }
}

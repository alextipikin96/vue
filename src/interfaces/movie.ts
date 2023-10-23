export interface IMovie {
  id: number
  title: string
  posterurl: string
  year: number
  genres: string[]
}

export interface IState {
  movies: IMovie[]
  loading: boolean
  error: string | null
}

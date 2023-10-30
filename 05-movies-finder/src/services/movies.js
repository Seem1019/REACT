import { API_KEY, API_URL } from "../constants/devConstants"
export const searchMovies = async ({ search }) => {
    if (search === '') return null
  
    try {
      const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${search}`)
      const json = await response.json()
  
      const movies = json.Search
  
      return movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        img: movie.Poster
      }))
    } catch (e) {
      throw new Error('Error searching movies')
    }
  }
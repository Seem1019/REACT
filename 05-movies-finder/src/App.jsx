import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
function App () {
  const { movies: mappedMovies } = useMovies()

  return (
    <div className='page'>
      <header>
        <h1>Movies finder</h1>
        <form className='mf-form'>
          <input placeholder='Title...' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App

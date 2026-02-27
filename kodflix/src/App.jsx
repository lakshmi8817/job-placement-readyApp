import { useState, useEffect, useRef } from 'react'
import './App.css'

const API_KEY = 'adb124d3'
const BASE_URL = 'https://www.omdbapi.com/'

const CATEGORIES = [
  { title: 'Trending Now', query: 'popular' },
  { title: 'Action Movies', query: 'action' },
  { title: 'Comedy Movies', query: 'comedy' },
  { title: 'Horror Movies', query: 'horror' },
  { title: 'Drama Movies', query: 'drama' },
  { title: 'Sci-Fi Movies', query: 'sci-fi' },
]

const fetchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}&type=movie&page=1`)
    const data = await response.json()
    if (data.Response === 'True') {
      return data.Search || []
    }
    return []
  } catch (error) {
    console.error('Error fetching movies:', error)
    return []
  }
}

const fetchMovieDetails = async (imdbID) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching movie details:', error)
    return null
  }
}

function Header({ searchQuery, setSearchQuery }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <a href="/" className="logo">KODFLIX</a>
      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </header>
  )
}

function Hero({ movie }) {
  if (!movie) return null

  return (
    <section 
      className="hero"
      style={{ 
        backgroundImage: `url(${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/1920x1080/141414/ffffff?text=No+Image'})`
      }}
    >
      <div className="hero-content">
        <span className="hero-badge">Featured</span>
        <h1 className="hero-title">{movie.Title}</h1>
        <div className="hero-meta">
          <span className="hero-rating">97% Match</span>
          <span>{movie.Year}</span>
          <span>{movie.Type}</span>
        </div>
        <p className="hero-description">
          {movie.Plot || `Experience the thrilling journey of "${movie.Title}" - a must-watch movie that captivates audiences worldwide.`}
        </p>
        <div className="hero-buttons">
          <button className="btn btn-play">▶ Play</button>
          <button className="btn btn-info">ℹ More Info</button>
        </div>
      </div>
    </section>
  )
}

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img 
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150x225/1f1f1f/ffffff?text=No+Poster'} 
        alt={movie.Title}
        loading="lazy"
      />
      <div className="movie-card-overlay">
        <div className="movie-card-title">{movie.Title}</div>
      </div>
    </div>
  )
}

function MovieRow({ title, movies, onScroll }) {
  const containerRef = useRef(null)

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="movie-row">
      <h2 className="row-title">{title}</h2>
      <button className="scroll-btn left" onClick={() => scroll('left')}>‹</button>
      <div className="movies-container" ref={containerRef}>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
      <button className="scroll-btn right" onClick={() => scroll('right')}>›</button>
    </div>
  )
}

function Loading() {
  return (
    <div className="loading">
      <div className="loading-spinner"></div>
      <span>Loading movies...</span>
    </div>
  )
}

function Error({ message, onRetry }) {
  return (
    <div className="error">
      <span>⚠️ {message}</span>
      <button onClick={onRetry}>Try Again</button>
    </div>
  )
}

function NoResults() {
  return (
    <div className="no-results">
      <span>No movies found. Try a different search.</span>
    </div>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">Audio Description</a>
        <a href="#">Help Center</a>
        <a href="#">Gift Cards</a>
        <a href="#">Media Center</a>
        <a href="#">Investor Relations</a>
        <a href="#">Jobs</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy</a>
        <a href="#">Legal Notices</a>
        <a href="#">Cookie Preferences</a>
        <a href="#">Corporate Information</a>
        <a href="#">Contact Us</a>
      </div>
      <p>© 2026 KodFlix. All rights reserved. This is a demo app using OMDB API.</p>
    </footer>
  )
}

function App() {
  const [movies, setMovies] = useState({})
  const [featuredMovie, setFeaturedMovie] = useState(null)
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [movieDetails, setMovieDetails] = useState(null)

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true)
      setError(null)
      try {
        const moviePromises = CATEGORIES.map(async (cat) => {
          const movies = await fetchMovies(cat.query)
          return { category: cat.title, movies }
        })

        const results = await Promise.all(moviePromises)
        const movieMap = {}
        results.forEach(({ category, movies }) => {
          movieMap[category] = movies
        })

        setMovies(movieMap)

        if (results[0]?.movies?.length > 0) {
          const featured = results[0].movies[0]
          const details = await fetchMovieDetails(featured.imdbID)
          setFeaturedMovie(details || featured)
        }

        setLoading(false)
      } catch (err) {
        setError('Failed to fetch movies. Please try again.')
        setLoading(false)
      }
    }

    loadMovies()
  }, [])

  useEffect(() => {
    const searchMovies = async () => {
      if (searchQuery.trim().length < 2) {
        setSearchResults([])
        return
      }

      const results = await fetchMovies(searchQuery)
      setSearchResults(results)
    }

    const debounce = setTimeout(searchMovies, 500)
    return () => clearTimeout(debounce)
  }, [searchQuery])

  const handleRetry = () => {
    window.location.reload()
  }

  if (loading) {
    return (
      <div className="app">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Loading />
      </div>
    )
  }

  if (error) {
    return (
      <div className="app">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Error message={error} onRetry={handleRetry} />
      </div>
    )
  }

  return (
    <div className="app">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <Hero movie={featuredMovie} />
      
      <div className="movie-rows">
        {searchQuery.length >= 2 ? (
          searchResults.length > 0 ? (
            <MovieRow title={`Search Results for "${searchQuery}"`} movies={searchResults} />
          ) : (
            <NoResults />
          )
        ) : (
          Object.entries(movies).map(([category, movieList]) => (
            <MovieRow key={category} title={category} movies={movieList} />
          ))
        )}
      </div>

      <Footer />
    </div>
  )
}

export default App

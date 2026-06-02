export async function FetchData() {
  const data = await fetch('http://127.0.0.1:8000/test')
  const post = await data.json()
  return (
    <div>
      {post.message}
    </div>
  )
}
export async function FetchTopMovieData() {
  const data = await fetch('http://127.0.0.1:8000/movies/top-rated')
  const movies = await data.json()
  return movies;
}

export async function FetchPopularMovieData() {
  const data = await fetch('http://127.0.0.1:8000/movies/popular')
  const movies = await data.json()
  return movies;
}

export async function FetchNowPlayingMovieData() {
  const data = await fetch('http://127.0.0.1:8000/movies/now-playing')
  const movies = await data.json()
  return movies;
}

export async function FetchClassicMovieData() {
  const data = await fetch('http://127.0.0.1:8000/movies/classic')
  const movies = await data.json()
  return movies;
}

export async function FetchMovieCastAndCrew(movieId: number) {
  const data = await fetch(`http://127.0.0.1:8000/movies/${movieId}/credits`)
  const castAndCrew = await data.json()
  return castAndCrew
}

export async function FetchGenres() {
  const data = await fetch('http://127.0.0.1:8000/genres')
  const genres = await data.json()
  return genres;
}
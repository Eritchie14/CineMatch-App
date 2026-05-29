import { FetchTopMovieData, FetchPopularMovieData, FetchNowPlayingMovieData } from "./components/fetch-data";

type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export default async function Home() {
  const movieData: Movie[] = await FetchTopMovieData();
  const popularMovieData: Movie[] = await FetchPopularMovieData();
  const nowPlayingMovieData: Movie[] = await FetchNowPlayingMovieData();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p>wwhere is this</p>
      <main className="flex flex-1 w-full flex-col items-center justify-between gap-20 py-32 px-4 bg-white dark:bg-black sm:items-start sm:px-6">
        <h2>Top Rated Movies</h2>
        <div className="movie-row">
          {movieData.map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
            >
              <div className="movie-poster">
                {movie.poster_path ? (
                  <img 
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                      alt={`${movie.original_title} poster`} 
             />
                ) : (
                  <span>Poster</span>
                )}
              </div>

              <div className="movie-card-body">
                <h3 className="movie-title">
                  {movie.original_title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <h2>Popular Movies</h2>
        <div className="movie-row">
          {popularMovieData.map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
            >
              <div className="movie-poster">
                {movie.poster_path ? (
                  <img 
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                      alt={`${movie.original_title} poster`} 
             />
                ) : (
                  <span>Poster</span>
                )}
              </div>

              <div className="movie-card-body">
                <h3 className="movie-title">
                  {movie.original_title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <h2>Now Playing Movies</h2>
        <div className="movie-row">
          {nowPlayingMovieData.map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
            >
              <div className="movie-poster">
                {movie.poster_path ? (
                  <img 
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                      alt={`${movie.original_title} poster`} 
             />
                ) : (
                  <span>Poster</span>
                )}
              </div>

              <div className="movie-card-body">
                <h3 className="movie-title">
                  {movie.original_title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
      </main>
    </div>
  );
}

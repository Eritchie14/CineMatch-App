import { FetchTopMovieData, FetchPopularMovieData, FetchNowPlayingMovieData, FetchClassicMovieData } from "./components/fetch-data";
import MovieRow from "./components/MovieRow";
//import {useState} from 'react';

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
  const topRatedMovieData: Movie[] = await FetchTopMovieData();
  const popularMovieData: Movie[] = await FetchPopularMovieData();
  const nowPlayingMovieData: Movie[] = await FetchNowPlayingMovieData();
  const classicMovieData: Movie[] = await FetchClassicMovieData();
  //const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center justify-between gap-20 py-32 px-4 bg-white dark:bg-black sm:items-start sm:px-6">
        
        <div>
          <h1 style={{ paddingLeft: '20px' }}>CineMatch</h1>
          <h2 style={{ paddingLeft: '20px' }}>Your Personalized Movie Recommendation App</h2>
          <p style={{ paddingLeft: '20px' }}>
            Browse for your next movie night pick, or get personalized recommendations based on your preferences. 
            CineMatch is your go-to app for discovering movies you&apos;ll love.</p>
          <div className="recommendation-area">
            <p>Get a personalized movie recommendation here</p>
            <button type="button">Get Recommendation</button>
          </div>
          <p>
          </p>
        </div>

        <h2  style={{ paddingLeft: '20px' }}>Now Playing</h2>
        <MovieRow movies={nowPlayingMovieData} />
        <h2 style={{ paddingLeft: '20px' }}>Top Rated</h2>
        <MovieRow movies={topRatedMovieData} />
        <h2  style={{ paddingLeft: '20px' }}>Popular</h2>
        <MovieRow movies={popularMovieData} />
        <h2  style={{ paddingLeft: '20px' }}>Classics</h2>
        <MovieRow movies={classicMovieData} />

      </main>
    </div>
  );
}

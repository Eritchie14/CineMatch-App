"use client";

import { useState } from "react";
import MovieModal from "./MovieModal";
import { FetchMovieCastAndCrew } from "./fetch-data";

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

type MovieRowProps = {
  movies: Movie[];
};

type CastAndCrew = {
  cast: {
    name: string;
    role: string;
  }[];
  director: {
    name: string;
  } | null;
};

export default function MovieRow({ movies }: MovieRowProps) {
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [castAndCrew, setCastAndCrew] = useState<CastAndCrew | null>(null);

    async function handleMovieClick(movie: Movie) {
    setSelectedMovie(movie);

    const data = await FetchMovieCastAndCrew(movie.id);
    setCastAndCrew(data);
  }

    return(
        <>
<div className="movie-row">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() => handleMovieClick(movie)}
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
            </div>
          ))}
        </div>
        {selectedMovie && castAndCrew && (
            <MovieModal
            movie={selectedMovie}
            castAndCrew={castAndCrew}
            onClose={() => {
                setSelectedMovie(null);
                setCastAndCrew(null);
            }}
        />
      )}
        </>
    );
}
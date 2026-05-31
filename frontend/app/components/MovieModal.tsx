"use client";

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

type CastAndCrew = {
  cast: {
    name: string;
    role: string;
  }[];
  director: {
    name: string;
  } | null;
};

type MovieModalProps = {
  movie: Movie;
  castAndCrew: CastAndCrew;
  onClose: () => void;
};



export default function MovieModal({ movie, castAndCrew, onClose }: MovieModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{ backgroundColor: 'var(--accent)' }}>
          X
        </button>

        <h2>{movie.original_title}</h2>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average} / 10</p>
        <p>{movie.overview}</p>
        <h3>Cast</h3>
        <ul>
          {castAndCrew.cast.map((actor, index) => (
            <li key={index}>
              {actor.name} as {actor.role}
            </li>
          ))}
        </ul>
        <h3>Director</h3>
        {castAndCrew.director ? (
          <p>{castAndCrew.director.name}</p>
        ) : (
          <p>Director not available</p>
        )}
      </div>
    </div>
  );
}
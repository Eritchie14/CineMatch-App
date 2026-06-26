'use client'
import { useState } from "react";
import "../RecPage/RecPage.css"

type Genre = {
  id: number;
  name: string;
};
type movieGenreProps = {
    genres: Genre[];
};

export default function GenreGrid({genres}: movieGenreProps) {

  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const [isClicked, setIsClicked] = useState(false);

async function handleGenreClick(genre: Genre) {

  setIsClicked((prevState) => !prevState);
  if(isClicked){

  }

  setSelectedGenres((prevState) => {
    const nextState = prevState.some((g) => g.id === genre.id)
    ? prevState.filter(g => g.id !== genre.id) : [...prevState, genre]
   // console.log(`Genre clicked: ${genre.name}`);
    console.log(`Genres clicked: ${nextState.map((g) => g.name).join(", ")}`);
    return nextState;
    });
}
    
  return (

    <div className="genre-grid">
      {genres.map((genre) => (
        <div key={genre.id} className={selectedGenres.some((g) => g.id == genre.id) ? "genre-card-clicked" : "genre-card"}
        onClick={() => handleGenreClick(genre)}>
          <h3>{genre.name}</h3>
        </div>
      ))}
  </div>
  );

}

import {FetchGenres} from "../components/fetch-data";
import './RecPage.css'

type Genre = {
  id: number;
  name: string;
};

export default async function Home() {
  
  const genres: Genre[] = await FetchGenres();
  
  return (


    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">


      <h1 className="text-3xl font-bold mb-4">Recommendations</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Get recommended BITCH!
      </p>

      <div className="genre-grid">
      {genres.map((genre) => (
        <div key={genre.id} className="genre-card">
          <h3>{genre.name}</h3>
        </div>
      ))}
  </div>


    </div>
  );
}
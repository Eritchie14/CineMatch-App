import {FetchGenres} from "../components/fetch-data";
import './RecPage.css'
import GenreGrid from "../components/genre-grid";
import Link from 'next/link'

type Genre = {
  id: number;
  name: string;
};

export default async function Home() {
  
  const genres: Genre[] = await FetchGenres();
  
  return (


    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      <Link href = "/">
        <button className="home-button">
          Go to Home
        </button>
      </Link>

      <h1 className="text-3xl font-bold mb-4">Recommendations</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Get a custom recommendation based on your favorite genres and movies! Start by selecting some genres below.
      </p>

      <GenreGrid genres={genres} />


    </div>
  );
}
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

interface movieProps {
    id: string,
    original_title: string,
    poster_path: string
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`;

export default function Home() {
  console.log("API_KEY", API_KEY)
    const [movies, setMovies] = useState<movieProps[] | null>();
    useEffect(()=>{
        fetch(url)
          .then(response => response.json())
          .then(result => {
            console.log(result.results)
            setMovies(result.results)
          })
    }, [])
  return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie: movieProps) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// export async function getServerSideProps() {
//   const { results } = await (
//     await fetch(`http://localhost:3000/api/movies`)
//   ).json();
//   return {
//     props: {
//       results,
//     },
//   };
// }
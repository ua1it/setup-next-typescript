import { useEffect, useState } from "react";
import Seo from "../../components/Seo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { movieIdState } from "../../states/movieState";

interface movieProps {
    id: string,
    original_title: string,
    poster_path: string
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`;

export default function Home({results}: InferGetServerSidePropsType<GetServerSideProps>) {
  const [idd, setIdd] = useRecoilState(movieIdState); 
  console.log("movieId", idd)
  const router = useRouter();
   const handleClickMovie = (id: string, title: string) => {
    setIdd(id);
    localStorage.setItem("movieKey", id);
    router.push({
      pathname: `/movies/${id}`,
      query: {
        title: title,
      }
    }, `/movies/${id}` //push의 두번째 파라미터 (as), url에서 보일 것만 표기
    )
   }
  return (
    <div className="container">
      <Seo title="Home" />
      {!results && <h4>Loading...</h4>}
      {results?.map((movie: movieProps) => (
        <div onClick={()=>handleClickMovie(movie.id, movie.original_title)} className="movie" key={movie.id}>
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

export async function getServerSideProps({}: GetServerSideProps) {
  const { results } = await (
    await fetch(url)
  ).json();
  return {
    props: {
      results,
    },
  };
}
import { useRecoilState, useRecoilValue } from "recoil";
import Seo from "../components/Seo";
import { movieIdState } from "../states/movieState";
import { useEffect } from "react";

export default function Home() {
  const movieId = useRecoilValue(movieIdState);
  console.log("movieId", movieId)
  useEffect(()=>{
    console.log("movieKey", localStorage.getItem('movieKey'))
  },[])
  return (
    <div>
      <Seo title="Home" />
      <h1>Home</h1>
    </div>
  );
}

declare global {
  interface Window {
    naver: any;
  }
}
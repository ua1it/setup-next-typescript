import { useRecoilState, useRecoilValue } from "recoil";
import Seo from "../components/Seo";
import { movieIdState } from "../states/movieState";

export default function Home() {
  const movieId = useRecoilValue(movieIdState);
  console.log("movieId", movieId)
  return (
    <div>
      <Seo title="Home" />
      <h1>Home</h1>
    </div>
  );
}

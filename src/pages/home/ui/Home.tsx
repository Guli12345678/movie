import { useMovie } from "@/entities/movie";
import { MovieList } from "@/widgets/movie-list";
import { memo } from "react";
import Hero from "../../../widgets/hero";

export const Home = memo(() => {
  const { getMovies } = useMovie();
  const { data } = getMovies();
  console.log("First movie:", data?.results?.[0]);


  return (
    <div className="bg-black">
      <Hero movies={data?.results} />
      <MovieList movies={data?.results} />
    </div>
  );
});

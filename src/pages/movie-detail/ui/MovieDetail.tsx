import { MovieInfo, useMovie } from "@/entities/movie";
import { MovieList } from "@/widgets/movie-list";
import { memo } from "react";
import { useParams } from "react-router-dom";

export const MovieDetail = memo(() => {
  const { id } = useParams();
  const { getMovieInfo } = useMovie();
  const { data: similarMovies } = getMovieInfo(id as string, "similar");

  return (
    <div>
      <MovieInfo id={id as string} />
      <br />
      <br />
      <MovieList movies={similarMovies?.results?.slice(0, 4)} />
      <br />
    </div>
  );
});

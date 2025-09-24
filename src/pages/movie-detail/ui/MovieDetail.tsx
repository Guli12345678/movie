import { MovieInfo, useMovie } from "@/entities/movie";
import { MovieList } from "@/widgets/movie-list";
import { memo } from "react";
import { useParams } from "react-router-dom";

export const MovieDetail = memo(() => {
  const { id } = useParams();
  const { getMovieInfo, useReviewOfMovie } = useMovie();
  const { data: similarMovies } = getMovieInfo(id as string, "similar");
  const { data: reviewData, isLoading, error } = useReviewOfMovie(id!);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed</div>;

  return (
    <div>
      <MovieInfo id={id as string} reviews={reviewData?.results} />
      <MovieList movies={similarMovies?.results?.slice(0, 4)} />
    </div>
  );
});

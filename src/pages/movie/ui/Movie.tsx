import { useMovie } from "@/entities/movie";
import { MoviePagination } from "@/features/movie-pagination";
import { MovieList } from "@/widgets/movie-list";
import { memo } from "react";
import { useSearchParams } from "react-router-dom";
import MovieSort from "../../movie-sort";
export const Movie = memo(() => {
  const { getMovies } = useMovie();
  const [searchParams] = useSearchParams();

  const date = new Date()

  const page = searchParams.get("page") ?? "1";
  const sort_by = searchParams.get("sort") ?? "popularity.desc";
  const release_date_lte = searchParams.get("release_date.lte") ?? date;
  const with_genres = searchParams.get("with_genres") ?? "16";

  const { data } = getMovies({
    page,
    sort_by,
    "release_date.lte": String(release_date_lte),
    with_genres,
  });

  if (!data) return <div className="text-white">Loading...</div>;

  return (
    <div className="container mx-auto">
      <MovieSort />
      <MovieList movies={data.results} />
      <MoviePagination page={page} total_pages={data.total_pages} />
    </div>
  );
});

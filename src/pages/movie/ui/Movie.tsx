import { useMovie } from "@/entities/movie";
import { MoviePagination } from "@/features/movie-pagination";
import { MovieList } from "@/widgets/movie-list";
import { memo, Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import MovieSort from "../../movie-sort";
export const Movie = memo(() => {
  const { getMovies } = useMovie();
  const [searchParams] = useSearchParams();

  const date = new Date();

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

  if (!data)
    return (
      <Suspense>
        <div className="min-h-screen w-full flex items-center justify-center">
          <div className="flex space-x-2">
            <div
              className="animate-bounce transition duration-300"
              style={{ animationDelay: "0ms" }}
            >
              <svg
                width="11"
                height="34"
                viewBox="0 0 11 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 6.45186C0 5.81736 0.334695 5.22971 0.880929 4.90517L8.09406 0.619446C9.29608 -0.0947443 10.8197 0.769863 10.8197 2.16617V31.8338C10.8197 33.2302 9.29608 34.0947 8.09406 33.3805L0.880933 29.0948C0.334695 28.7703 0 28.1826 0 27.5481V6.45186Z"
                  fill="#C61F1F"
                />
              </svg>
            </div>
            <div
              className="animate-bounce transition duration-300"
              style={{ animationDelay: "200ms" }}
            >
              <svg
                width="16"
                height="36"
                viewBox="0 0 16 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.327881 7.62471C0.327881 6.89999 0.763283 6.24596 1.43261 5.96525L13.1539 1.04927C14.3424 0.550833 15.6557 1.422 15.6557 2.70874V33.2913C15.6557 34.578 14.3424 35.4492 13.1539 34.9507L1.43261 30.0348C0.763283 29.754 0.327881 29.1 0.327881 28.3753V7.62471Z"
                  fill="#C61F1F"
                />
              </svg>
            </div>
            <div
              className="animate-bounce transition duration-300"
              style={{ animationDelay: "400ms" }}
            >
              <svg
                width="20"
                height="36"
                viewBox="0 0 20 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.16394 7.73667C0.16394 6.95669 0.667191 6.26549 1.41037 6.02465L17.64 0.764888C18.8049 0.387312 20 1.25422 20 2.47691V33.5231C20 34.7458 18.8049 35.6127 17.64 35.2351L1.41037 29.9754C0.667191 29.7345 0.16394 29.0433 0.16394 28.2633V7.73667Z"
                  fill="#C61F1F"
                />
              </svg>
            </div>
          </div>
        </div>
      </Suspense>
    );

  return (
    <div className="container mx-auto">
      <MovieSort />
      <MovieList movies={data.results} />
      <MoviePagination page={page} total_pages={data.total_pages} />
    </div>
  );
});

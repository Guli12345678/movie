import { useQuery } from "@tanstack/react-query";
import { fetchMovies, fetchMovieById, fetchMovieInfo, fetchReviewOfMovie } from "../api/fetchApi";
import type { IMovieParams } from "./types";

export const useMovie = () => {
  const getMovies = (params?: IMovieParams) =>
    useQuery<any, any>({
      queryKey: ["movieKey", params],
      queryFn: () => fetchMovies(params),
      retry: 0,
      refetchOnWindowFocus: false,
      gcTime: 1000 * 60 * 8,
      staleTime: 1000 * 60,
    });

  const getMovieById = (id: string) =>
    useQuery({
      queryKey: ["movieKey", id],
      queryFn: () => fetchMovieById(id),
    });

 const useReviewOfMovie = (id: string) =>
  useQuery({
    queryKey: ["movieReview", id],
    queryFn: () => fetchReviewOfMovie(id),
    enabled: !!id, // prevents query from running if id is undefined
  });


  const getMovieInfo = (id: string, path: string) =>
    useQuery({
      queryKey: ["movieKey", id, path],
      queryFn: () => fetchMovieInfo(id, path),
    });

  return { getMovies, getMovieById, getMovieInfo, useReviewOfMovie };
};

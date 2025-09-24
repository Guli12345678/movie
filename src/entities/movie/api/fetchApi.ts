import { api } from "@/shared/api";
import type { IMovieParams } from "../model/types";

export const fetchMovies = async (params?: IMovieParams) => {
  const response = api.get("discover/movie", {
    params: {
      without_genres: "18,36,27,10402,10749",
      with_genres: "16",
      // "primary_release_date.lte": "01.01.2010",
      // "primary_release_date.gte": "01.01.2000",
      ...params,
    },
  });
  return (await response).data;
};

export const fetchMovieById = async (id: string) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};
export const fetchReviewOfMovie = async (id: string) => {
  const response = await api.get(`/movie/${id}/reviews`);
  return response.data;
};
export const fetchMovieFromTitle = async (title: string) => {
  const response = await api.get(`search/movie?query=${title}`);
  return response.data;
};

export const fetchMovieInfo = async (id: string, path: string) => {
  try {
    const response = await api.get(`/movie/${id}/${path}`);
    return response.data;
  } catch (error) {
    const response = await api.get(`/movie/${id}/${path}`);
    return response.data;
  }
};

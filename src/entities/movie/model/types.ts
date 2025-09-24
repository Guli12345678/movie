export interface IMovie {
  id: number;
  title: string;
  original_title: string;
  original_language: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  genre_ids: number[];
  popularity: number;
  vote_average: number;
  vote_count: number;
  video: boolean;
}

export interface IMovieParams {
  page: string;
  sort_by?: string;
}

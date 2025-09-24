import { memo } from "react";
import { useParams } from "react-router-dom";
import { useMovie } from "../../../entities/movie";

export const MovieDetail = memo(() => {
  const { id } = useParams();
  const { getMovieById } = useMovie();

  getMovieById(id as string);
  return <div className="container">{id}</div>;
});

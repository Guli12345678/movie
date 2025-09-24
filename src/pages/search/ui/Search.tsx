import { Input } from "antd";
import { memo, useState } from "react";
import { MovieCard, useMovie, type IMovie } from "../../../entities/movie";

export const Search = memo(() => {
  const [title, setTitle] = useState("");

  const { useMovieTtitle } = useMovie(); 
  const { data: titledMovie } = useMovieTtitle(title);

  return (
    <div className="container">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="search"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {titledMovie?.results?.map((item: IMovie) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>
    </div>
  );
});

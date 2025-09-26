import { Input } from "antd";
import { memo, useState } from "react";
import { MovieCard, useMovie, type IMovie } from "../../../entities/movie";

export const Search = memo(() => {
  const [title, setTitle] = useState("");

  const { useMovieTtitle } = useMovie();
  const { data: titledMovie } = useMovieTtitle(title);

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h2 className="text-red-500 text-center font-bold text-3xl mt-10 ">
        Search
      </h2>
      <div className="flex justify-center mb-8 p-10">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Search"
          className="w-full max-w-md rounded-md shadow-md border-none text-gray-800"
          size="large"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-100">
        {titledMovie?.results?.map((item: IMovie) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>

      {title && titledMovie?.results?.length === 0 && (
        <p className="text-center text-gray-400 mt-10">
          No results found for “{title}”
        </p>
      )}
    </div>
  );
});

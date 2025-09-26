import { createImageUrl } from "@/shared/utils";
import { memo, type FC } from "react";
import type { IMovie } from "../model/types";
import { useNavigate } from "react-router-dom";

interface Props {
  movie: IMovie;
}

export const MovieCard: FC<Props> = memo((props) => {
  const { movie } = props;
  const navigate = useNavigate();
  const release_year = Number(movie.release_date?.split("-")[0]);
  const current_year = new Date().getFullYear();

  return (
    <div>
      <div onClick={() => navigate(`/movie/${movie.id}`)}>
        <div className="relative ">
          <img
            className="md:h-[435px] h-[235px] w-full rounded-lg object-cover"
            src={
              movie.poster_path
                ? createImageUrl(movie.poster_path)
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZZBWSuMwYSozafkIxT6khwP8nxrQgEVvkww&s"
            }
            alt=""
          />
          {release_year && (
            <span className="bg-red-500 text-white text-sm absolute top-0 mt-3 ml-5 px-2 rounded">
              {release_year < current_year ? (
                release_year
              ) : (
                <>
                  {release_year}
                  <br />
                  Coming soon
                </>
              )}
            </span>
          )}
        </div>
      </div>
      <div className="text-white mt-2">
        <h3 className="font-semibold line-clamp-1">{movie.title}</h3>
        <p className="line-clamp-1">{movie.overview}</p>
      </div>
    </div>
  );
});

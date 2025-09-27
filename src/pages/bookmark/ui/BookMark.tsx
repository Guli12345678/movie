import { useSelector } from "react-redux";
import { MovieList } from "../../../widgets/movie-list";
import type { RootState } from "../../../app/store";

export const BookMark = () => {
  const bookmark = useSelector((state: RootState) => state.bookmark.value);
  return (
    <div className="container w-full min-h-screen">
      <div className=" text-red-500 text-center mt-[10%] font-semibold text-3xl">
        BookMark page
      </div>

      <div className="WishList">
        {!bookmark.length ? (
          <div className="text-center">
            <img
              src="https://st2.depositphotos.com/41116220/47825/v/450/depositphotos_478250634-stock-illustration-wishlist-line-icon-simple-outline.jpg"
              className="mx-auto"
              alt=""
            />
          </div>
        ) : (
          <MovieList movies={bookmark} />
        )}
      </div>
    </div>
  );
};

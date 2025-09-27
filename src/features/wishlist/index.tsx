import { memo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { MovieList } from "../../widgets/movie-list";
const WishList = () => {
  const bookmark = useSelector((state: RootState) => state.bookmark.value);
  console.log(bookmark);
  return (
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
  );
};

export default memo(WishList);

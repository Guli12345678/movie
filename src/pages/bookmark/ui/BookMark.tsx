import { useSelector } from "react-redux";
import { MovieList } from "@/widgets/movie-list";
import type { RootState } from "@/app/store";
import { useTranslation } from "react-i18next";
import "@/app/i18n";
import { PiSmileySadLight } from "react-icons/pi";
export const BookMark = () => {
  const { t } = useTranslation();
  const bookmark = useSelector((state: RootState) => state.bookmark.value);
  return (
    <div className="container w-full min-h-screen">
      <div className="WishList">
        {!bookmark.length ? (
          <div className="text-center">
            <div className=" text-red-500 text-center mt-[10%] font-semibold text-3xl">
              {t("empty_bookmark")}
            </div>

            <div>
              <PiSmileySadLight className="text-red-600 mx-auto mt-10" size={160} />
            </div>
          </div>
        ) : (
          <MovieList movies={bookmark} />
        )}
      </div>
    </div>
  );
};

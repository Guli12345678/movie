import { useTranslation } from "react-i18next";
import { IoIosSearch } from "react-icons/io";
import { PiFilmSlateBold, PiMonitorLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <div>
      <ul className="fixed bottom-0 left-0 w-full bg-black z-[100] flex gap-10 items-center justify-evenly md:justify-center md:static">
        <li>
          <NavLink
            to="/movie"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center justify-center text-center text-red-500 font-semibold"
                : "flex flex-col items-center justify-center text-center text-gray-400 hover:text-white"
            }
          >
            <PiMonitorLight size={28} />
            {t("nav.movies")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bookmark"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center justify-center text-center text-red-500 font-semibold"
                : "flex flex-col items-center justify-center text-center text-gray-400 hover:text-white"
            }
          >
            <PiFilmSlateBold size={28} />
            {t("nav.bookmark")}
          </NavLink>
        </li>
        <li className="mt-1">
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center justify-center text-center text-red-500 font-semibold"
                : "flex flex-col items-center justify-center text-center text-gray-400 hover:text-white"
            }
          >
            <IoIosSearch size={28} />
            {t("nav.search")}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

import { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/shared/assets/logo.svg";
import { PiFilmSlateBold, PiMonitorLight, PiTicketLight } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { Option } from "./Option";
import "@/app/i18n"
export const Header = memo(() => {
  const { t } = useTranslation();

  return (
    <header className="bg-black h-[120px] flex items-center text-[#A1A1A1]">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

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
              to="/tickets"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col items-center justify-center text-center text-red-500 font-semibold"
                  : "flex flex-col items-center justify-center text-center text-gray-400 hover:text-white"
              }
            >
              <PiTicketLight size={28} />
              {t("nav.tickets")}
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

        <div>
          <button className="w-[180px] h-[56px] rounded-[12px] text-white bg-[#C61F1F]">
            {t("auth.login")}
          </button>
        </div>

        <Option />
      </div>
    </header>
  );
});

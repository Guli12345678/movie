import { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/shared/assets/logo.svg";
import { PiFilmSlateBold, PiMonitorLight, PiTicketLight } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";

export const Header = memo(() => {
  return (
    <header className=" bg-[black] h-[120px] flex items-center text-[#A1A1A1]">
      <div className="container flex justify-between items-center ">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>

        <ul className="fixed bottom-0 left-0 w-full bg-black z-[100] flex gap-10 items-center justify-evenly md:justify-center md:static">
          <li className="">
            <NavLink
              to="/movie"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col items-center justify-center text-center text-red-500 font-semibold"
                  : "flex flex-col items-center justify-center text-center text-gray-400 hover:text-white"
              }
            >
              <PiMonitorLight size={28} />
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col items-center justify-center text-center text-red-500 font-semibold"
                  : "flex flex-col items-center justify-center text-center text-gray-400 hover:text-white"
              }
              to={"/bookmark"}
            >
              <PiFilmSlateBold size={28} />
              Shows
            </NavLink>
          </li>
          <li className="mt-1">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col items-center justify-center text-center text-red-500 font-semibold"
                  : "flex flex-col items-center justify-center text-center text-gray-400 hover:text-white"
              }
              to={"/tickets"}
            >
              <PiTicketLight size={28} />

              <span className="">Tickets</span>
            </NavLink>
          </li>
          <li className="mt-1">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col items-center justify-center text-center text-red-500 font-semibold"
                  : "flex flex-col items-center justify-center text-center text-gray-400 hover:text-white"
              }
              to={"/search"}
            >
              <IoIosSearch size={28} />

              <span className="">Search</span>
            </NavLink>
          </li>
        </ul>

        <div>
          <button className="w-[180px] h-[56px] rounded-[12px] text-white bg-[#C61F1F]">
            Войти
          </button>
        </div>
      </div>
    </header>
  );
});

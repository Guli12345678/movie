import { memo } from "react";
import { Link } from "react-router-dom";
import logo from "@/shared/assets/logo.svg";
import vector1 from "@/shared/assets/Vector (4).svg";
import vector5 from "@/shared/assets/Vector(5).svg";
import vector2 from "@/shared/assets/tablet-line.svg";
import label from "@/shared/assets/label.png";
export const Header = memo(() => {
  return (
    <header className=" bg-[black] text-[#A1A1A1]">
      <div className="container flex justify-between  items-center ">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>

        <ul className="hidden  md:flex md:gap-10">
          <li className="flex justify-center items-center ">
            <Link to={"/movie"}>
              <img className=" flex justify-self-center" src={vector1} alt="" />
              Афиша
            </Link>
          </li>
          <li>
            <Link to={"/bookmark"}>
              <img className="flex justify-self-center" src={vector2} alt="" />
              Сеансы
            </Link>
          </li>
          <li className="mt-1">
            <Link to={"/"}>
              <img
                className="flex justify-self-center h-[20px]"
                src={label}
                alt=""
              />
              <span className="">Билеты</span>
            </Link>
          </li>
          <li className="mt-1">
            <Link to={"/search"}>
              <img
                className="flex justify-self-center h-[20px]"
                src={vector5}
                alt=""
              />
              <span className="">Поиск</span>
            </Link>
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

import { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/shared/assets/logo.svg";
import { CiLogin } from "react-icons/ci";
import { Option } from "./Option";
import "@/app/i18n";
import { Navigation } from "./Navigation";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../app/store";
import { Dropdown, Space, type MenuProps } from "antd";
import { removeUser } from "../../../features/auth";

export const Header = memo(() => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a rel="noopener noreferrer" href="#">
          Profile
        </a>
      ),
    },
    {
      key: "2",
      label: <p onClick={() => dispatch(removeUser())}>Logout</p>,
    },
  ];

  return (
    <header className="bg-black h-[120px] flex items-center text-[#A1A1A1]">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <Navigation />

        <div className="flex gap-10 items-center">
          <Option />
          <div>
            {user ? (
              <div>
                <Space direction="vertical">
                  <Space wrap>
                    <Dropdown menu={{ items }} placement="bottomLeft">
                      <img
                        src={user.picture}
                        className="size-10 rounded-full"
                        alt=""
                      />
                    </Dropdown>
                  </Space>
                </Space>
              </div>
            ) : (
              <div>
                <NavLink to={"/login"}>
                  <button className="md:px-4 px-2 md:py-5 py-3 rounded-lg text-white border border-[#C61F1F]">
                    <CiLogin />
                  </button>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
});

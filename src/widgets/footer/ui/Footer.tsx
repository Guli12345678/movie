import { memo } from "react";
import { DownLoad } from "./DownLoad";
import { Categories } from "./Categories";
import { Contact } from "./Contact";
import { About } from "./About";

export const Footer = memo(() => {
  return (
    <div className=" bg-[#111111] w-full mx-auto flex justify-center  items-center gap-100 text-[#A1A1A1]">
      <footer className="">
        <div className="container mt-10 grid lg:grid-cols-4 md:grid-cols-3 gap-14 grid-cols-1 mb-10 md:gap-40 p-10">
          <DownLoad />
          <About />
          <Categories />
          <Contact />
        </div>
      </footer>
    </div>
  );
});

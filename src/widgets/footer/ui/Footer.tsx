import { memo } from "react";
import { DownLoad } from "./DownLoad";
import { Categories } from "./Categories";
import { Contact } from "./Contact";
import { About } from "./About";

export const Footer = memo(() => {
  return (
    <footer className="bg-[#111111] mt-20 w-full border-8 ">
      <div className="container text-[#A1A1A1] flex justify-between p-10">
        <DownLoad />
        <About />
        <Categories />
        <Contact />
      </div>
    </footer>
  );
});

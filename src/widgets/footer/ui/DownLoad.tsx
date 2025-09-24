import { memo } from "react";
import logotype from "@/shared/assets/logotype.svg"
import google from "@/shared/assets/google-play.png"
import app from "@/shared/assets/app-store.png"
export const DownLoad = memo(() => {
  return (
    <div className="hover:border-b hover:text-red-800">
      <div className="flex flex-col justify-center items-center gap-5">
        <img className="" src={logotype} alt="" />
        <img className="" src={google} alt="" />
        <img className="" src={app} alt="" />
      </div>
    </div>
  );
});

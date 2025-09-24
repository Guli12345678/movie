import { memo } from "react";
import insta from "@/shared/assets/insta.svg"
import face from "@/shared/assets/facebook.svg"
import youtube from "@/shared/assets/youtube.svg"
export const Contact = memo(() => {
  return (
    <div className="">
      <div className="">
        <h5>Связаться с нами</h5>
        <br />
      
        <h3 className="text-red-600">+998 (95) 897-33-38</h3>
        <br />

        <h5>Социальные сети</h5>
      </div>
      <div className="flex gap-6 mt-5">
        <img src={insta} alt="" />
        <img src={face} alt="" />
        <img src={youtube} alt="" />
      </div>
    </div>
  );
});

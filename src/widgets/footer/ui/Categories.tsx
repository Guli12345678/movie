import { memo } from "react";
import ball from "@/shared/assets/ball.png";
import cookie from "@/shared/assets/cookie.svg";
import theatre from "@/shared/assets/theatre.svg";
import video from "@/shared/assets/video.svg";

export const Categories = memo(() => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <h2>Категории</h2>
        <div className="flex gap-2 ">
          <img src={video} alt="" />
          <span>Кино</span>
        </div>
        <div className="flex gap-2 ">
          <img src={theatre} alt="" />
          <span>Театр</span>
        </div>
        <div className="flex gap-2 ">
          <img src={cookie} alt="" />
          <span>Концерты</span>
        </div>
        <div className="flex gap-2 ">
          <img src={ball} alt="" />
          <span>Спорт</span>
        </div>
      </div>
    </div>
  );
});

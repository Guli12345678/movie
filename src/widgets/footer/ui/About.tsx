import { memo } from "react";
import star from "@/shared/assets/star.svg";
import notes from "@/shared/assets/notes.svg";
import qa from "@/shared/assets/question.svg";
import phone from "@/shared/assets/phone.svg";

export const About = memo(() => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <h2>О нас</h2>
        <div className="flex gap-2 ">
          <img src={notes} alt="" />
          <span>Публичная оферта</span>
        </div>
        <div className="flex gap-2 ">
          <img src={star} alt="" />
          <span>Реклама</span>
        </div>
        <div className="flex gap-2 ">
          <img src={qa} alt="" />
          <span>F.A.Q</span>
        </div>
        <div className="flex gap-2 ">
          <img src={phone} alt="" />
          <span>Контакты</span>
        </div>
      </div>
    </div>
  );
});

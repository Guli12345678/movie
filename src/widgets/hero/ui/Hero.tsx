import { memo, useState, type FC } from "react";
import type { IMovie } from "../../../entities/movie";
interface Props {
  movies: IMovie[];
}
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { createImageUrl } from "../../../shared/utils";

export const Hero: FC<Props> = memo(({ movies }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="container mt-10">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 3000 }}
        onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
      >
        {movies?.map((item: IMovie) => (
          <SwiperSlide key={item.id}>
            <img
              src={createImageUrl(item.backdrop_path)}
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center mt-4 text-xl font-semibold text-gray-700">
        <img
          className="w-[200px] h-[100px] object-cover"
          src={createImageUrl(movies?.[current]?.backdrop_path)}
          alt=""
        />
      </div>
    </div>
  );
});

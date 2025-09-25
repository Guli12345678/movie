import { memo, useState, type FC } from "react";
import { type IMovie } from "../../../entities/movie";
interface Props {
  movies: IMovie[];
}
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { createImageUrl } from "../../../shared/utils";
import { Navigation, Pagination } from "swiper/modules";

export const Hero: FC<Props> = memo(({ movies }) => {
  const [current, setCurrent] = useState(0);

  const [swiper, setSwiper] = useState<any>(null);

  return (
    <div className="container mt-10">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        onSwiper={(i) => setSwiper(i)}
        onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 3000 }}
      >
        {movies?.map((item: IMovie) => (
          <SwiperSlide key={item.id}>
            <img
              src={createImageUrl(item.backdrop_path)}
              className="w-full h-[640px] object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-4 overflow-x-auto mt-10">
        {movies?.map((item, index) => (
          <div
            key={item.id}
            className={`relative rounded-lg  border ${
              current === index ? "border-red-500" : ""
            }`}
          >
            <img
              onClick={() => swiper?.slideTo(index)}
              src={createImageUrl(item.backdrop_path)}
              className={`w-[200px] h-[100px] rounded-lg min-w-[200px] object-cover ${
                current === index ? "blur-[2px]" : ""
              }`}
              alt={item.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
});

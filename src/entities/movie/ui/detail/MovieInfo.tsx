import { memo, useState, type FC } from "react";
import { useMovie } from "../../model/useMovie";
import { createImageUrl } from "@/shared/utils";
import { Image } from "antd";

interface Props {
  id: string;
  reviews: any[];
}

export const MovieInfo: FC<Props> = memo((props) => {
  const { id, reviews } = props;
  const { getMovieById, getMovieInfo } = useMovie();
  const [show, setShow] = useState(false);
  const { data } = getMovieById(id);
  const { data: imageData } = getMovieInfo(id, "images");

  return (
    <div className="text-white text-center w-full">
      <section>
        <div
          style={{
            backgroundImage: `url(${createImageUrl(data?.backdrop_path)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="container rounded-2xl h-[700px] mt-10 flex flex-col items-center mb-30"
        >
          <br />
          <br />
          <br />
          <h1 className="text-[70px] font-bold">{data?.title}</h1>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <section className="container mt-[-50px]">
          <span className="hover:text-[#C61F1F] font-bold">Details: </span>
          <br />
          <br />

          <span className="hover:text-[#C61F1F] text-3xl font-bold mt-30">
            {data?.title}
          </span>
          <br />

          {show && (
            <div>
              <br />
              <br />
              <h4>
                <b>Original title:</b> {data.original_title}
              </h4>

              <p className="mt-10 mb-10">{data.overview}</p>
              <h5 className="font-bold"> Date: {data.release_date}</h5>
              <br />
              <h5 className="font-bold"> Views: {data.popularity}</h5>
            </div>
          )}

          <button
            className="hover:bg-[white] bg-[#C61F1F] hover:border hover:text-[#C61F1F] rounded-xl mt-10 gap-2 w-[150px] h-[55px] mb-10"
            onClick={() => setShow((p) => !p)}
          >
            {show ? "Show Less" : "Show More"}
          </button>
        </section>
      </section>
      <section className="flex overflow-x-auto  gap-5 mt-5 container">
        {imageData?.backdrops?.slice(0, 20)?.map((item: any, inx: number) => (
          <Image
            key={inx}
            className="min-w-[200px] rounded-lg"
            src={createImageUrl(item.file_path)}
            alt=""
          />
        ))}
      </section>
      <section className="container mt-10 text-left">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        {reviews?.length === 0 && <p>No reviews available.</p>}
        {reviews?.map((review) => (
          <div key={review.id} className="mb-6 p-4 shadow-lg shadow-slate-800 rounded-xl">
            <h4 className="font-bold text-[#C61F1F]">{review.author}</h4>
            <p className="mt-2 text-gray-300">{review.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
});

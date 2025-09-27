import { memo, useState, type FC } from "react";
import { useMovie } from "../../model/useMovie";
import { createImageUrl } from "@/shared/utils";
import { Image } from "antd";
import { Title } from "../../../../shared/ui/title/Title";
import { Link, Outlet } from "react-router-dom";
import { toggleLike } from "../../../../features/wishlist/model/bookMarkSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../app/store";
import { GoBookmark, GoBookmarkFill } from "react-icons/go";

interface Props {
  id: string;
}

export const MovieInfo: FC<Props> = memo((props) => {
  const { id } = props;
  const { getMovieById, getMovieInfo } = useMovie();
  const [show, setShow] = useState(false);

  const { data } = getMovieById(id);
  const { data: imageData } = getMovieInfo(id, "images");
  const dispatch = useDispatch();
  const bookmarks = useSelector((state: RootState) => state.bookmark.value);
  const exists = bookmarks.some((item) => item.id === data?.id);

  return (
    <div className="text-white  text-center w-full">
      <section>
        <div
          style={{
            backgroundImage: `url(${createImageUrl(data?.backdrop_path)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="container rounded-2xl md:h-[700px] mt-10 flex flex-col h-[500px] items-center mb-30"
        >
          <br />
          <br />
          <br />
          <div className="bg-black opacity-80 md:p-20 p-6 w-full rounded-2xl md:mt-[26%] mt-[45%]">
            <div className=" text-red-600 text-2xl font-bold">
              {data?.title}
            </div>
            <button className="w-[150px] text-white bg-red-500 mb-[-30px] hover:text-red-600 hover:border rounded-lg mt-10 hover:bg-white h-[50px]">
              Watch Now
            </button>
          </div>

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

        <div className="flex justify-center">
          <div className="mb-17 flex flex-col  ">
            <div
              className="flex items-center"
              onClick={() => dispatch(toggleLike(data))}
            >
              {exists ? (
                <button className="bg-red-700 flex items-center hover:bg-white rounded-lg hover:text-red-600 p-5 gap-5 font-semibold w-[230px]">
                  <GoBookmarkFill size={30} className="hover:text-red-600" />
                  Remove from BookMark
                </button>
              ) : (
                <button className="bg-red-700 flex items-center hover:bg-white rounded-lg hover:text-red-600 p-5 gap-5 font-semibold w-[230px]">
                  <GoBookmark size={30} className="hover:text-red-600" />
                  Add to BookMark
                </button>
              )}
            </div>
          </div>
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
      <section className="container mt-10">
        <Title>Tabs</Title>
        <div className="flex gap-4">
          <Link to={``}>Review</Link>
          <Link to={`cast`}>Cast</Link>
          <Link to={`others`}>Others</Link>
        </div>
        <Outlet />
      </section>
    </div>
  );
});

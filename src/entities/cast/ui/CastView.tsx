import { memo, type FC } from "react";
import { useCast } from "../model/useCast";
import { createImageUrl } from "../../../shared/utils";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  type: string;
}

export const CastView: FC<Props> = memo((props) => {
  const navigate = useNavigate();

  const { id, type } = props;

  const { getCasts } = useCast();

  const { data } = getCasts(id);

  return (
    <div className="flex gap-5 overflow-x-auto container mt-10 mx-auto">
      {data &&
        data[type]?.map((item: any) => (
          <div
            className="w-full"
            onClick={() => navigate(`/crew/${item.id}`)}
            key={item.id}
          >
            <div className="flex flex-col gap-10">
              <div className="w-[130px]">
                <img
                  className=" rounded-[20px] h-50 object-cover"
                  src={createImageUrl(item.profile_path)}
                  alt=""
                />
              </div>
              <div className="mt-[-30px]">
                <b className="text-red-600">{item.name}</b>

                {type == "cast" ? (
                  <h3> By {item.character}</h3>
                ) : (
                  <h3>{item.job}</h3>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
});

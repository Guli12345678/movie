import { memo } from "react";
import { useParams } from "react-router-dom";
import { CastView } from "../../../../entities/cast";

export const Cast = memo(() => {
  const { id } = useParams();

  return (
    <div>
      <CastView type="cast" id={id as string} />
    </div>
  );
});

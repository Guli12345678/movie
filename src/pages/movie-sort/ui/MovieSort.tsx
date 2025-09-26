import { Select } from "antd";
import { memo } from "react";
import { useSearchParams } from "react-router-dom";

export const MovieSort = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (value: string) => {
    searchParams.set("sort", value);
    setSearchParams(searchParams);
  };
  const onChange1 = (value: string) => {
    searchParams.set("release_date.lte", value);
    setSearchParams(searchParams);
  };
  const onChange2 = (value: string) => {
    searchParams.set("with_genres", value);
    setSearchParams(searchParams);
  };

  return (
    <div className="container mx-auto grid place-items-center md:grid-cols-3 md:place-items-baseline w-[200px] gap-10">
      <div>
        <Select
          className="w-60"
          placeholder="Sort_by"
          value={searchParams.get("sort") ?? undefined}
          options={[
            { value: "popularity.desc", label: "Most popular" },
            { value: "vote_average.desc", label: "Highest rated" },
            { value: "vote_average.asc", label: "Lowest rated" },
          ]}
          onChange={onChange}
        />
      </div>
      <div>
        <Select
          className="w-60"
          placeholder="Year"
          value={searchParams.get("release_date.lte") ?? undefined}
          options={[
            { value: "1878-01-01", label: "1850s" },
            { value: "1900-01-01", label: "1900s" },
            { value: "2000-01-01", label: "2000s" },
            { value: "2010-01-01", label: "2010s" },
            { value: "2020-01-01", label: "2020s" },
            { value: "2030-01-01", label: "2030s" },
          ]}
          onChange={onChange1}
        />
      </div>

      <div>
        <Select
          className="w-60"
          placeholder="Genre"
          value={searchParams.get("with_genres") ?? undefined}
          options={[
            { value: "28", label: "Action" },
            { value: "12", label: "Adventure" },
            { value: "16", label: "Animation" },
            { value: "35", label: "Comedy" },
            { value: "80", label: "Crime" },
            { value: "99", label: "Documentary" },
            { value: "18", label: "Drama" },
            { value: "10751", label: "Family" },
            { value: "14", label: "Fantasy" },
            { value: "36", label: "History" },
            { value: "27", label: "Horror" },
            { value: "10402", label: "Music" },
            { value: "9648", label: "Mystery" },
            { value: "10749", label: "Romance" },
            { value: "878", label: "Science Fiction" },
            { value: "10770", label: "TV Movie" },
            { value: "53", label: "Thriller" },
            { value: "10752", label: "War" },
            { value: "37", label: "Western" },
          ]}
          onChange={onChange2}
        />
      </div>
    </div>
  );
});

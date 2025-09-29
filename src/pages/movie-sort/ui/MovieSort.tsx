import { Select } from "antd";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import "@/app/i18n";

export const MovieSort = memo(() => {
  const { t } = useTranslation();
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
          allowClear
          placeholder={t("sort.placeholder")}
          value={searchParams.get("sort") ?? undefined}
          options={[
            { value: "popularity.desc", label: t("sort.popularity") },
            { value: "vote_average.desc", label: t("sort.highest") },
            { value: "vote_average.asc", label: t("sort.lowest") },
          ]}
          onChange={onChange}
        />
      </div>
      <div>
        <Select
          className="w-60"
          placeholder={t("year.placeholder")}
          allowClear
          value={searchParams.get("release_date.lte") ?? undefined}
          options={[
            { value: "1878-01-01", label: t("year.1850s") },
            { value: "1900-01-01", label: t("year.1900s") },
            { value: "2000-01-01", label: t("year.2000s") },
            { value: "2010-01-01", label: t("year.2010s") },
            { value: "2020-01-01", label: t("year.2020s") },
            { value: "2030-01-01", label: t("year.2030s") },
          ]}
          onChange={onChange1}
        />
      </div>

      <div>
        <Select
          className="w-60"
          placeholder={t("genre.placeholder")}
          value={searchParams.get("with_genres") ?? undefined}
          allowClear
          options={[
            { value: "28", label: t("genre.28") },
            { value: "12", label: t("genre.12") },
            { value: "16", label: t("genre.16") },
            { value: "35", label: t("genre.35") },
            { value: "80", label: t("genre.80") },
            { value: "99", label: t("genre.99") },
            { value: "18", label: t("genre.18") },
            { value: "10751", label: t("genre.10751") },
            { value: "14", label: t("genre.14") },
            { value: "36", label: t("genre.36") },
            { value: "27", label: t("genre.27") },
            { value: "10402", label: t("genre.10402") },
            { value: "9648", label: t("genre.9648") },
            { value: "10749", label: t("genre.10749") },
            { value: "878", label: t("genre.878") },
            { value: "10770", label: t("genre.10770") },
            { value: "53", label: t("genre.53") },
            { value: "10752", label: t("genre.10752") },
            { value: "37", label: t("genre.37") },
          ]}
          onChange={onChange2}
        />
      </div>
    </div>
  );
});

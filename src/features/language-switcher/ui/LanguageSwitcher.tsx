import { memo } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = memo(() => {
  const { i18n } = useTranslation();

  return (
    <select
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className="px-5 py-4 rounded-md flex justify-center  border border-red-700"
    >
      <option className="bg-black text-red-500" value="uz">
        O'zbekcha
      </option>
      <option className="bg-black text-red-500" value="en">
        English
      </option>
      <option className="bg-black text-red-500" value="ru">
        Русский
      </option>
    </select>
  );
});

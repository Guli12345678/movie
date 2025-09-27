import { memo } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = memo(() => {
  const { i18n } = useTranslation();

  console.log(i18n.language);

  return (
    <select
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className="px-5 py-4 rounded-md flex justify-center  mr-10 text-white bg-red-700"
    >
      <option value="uz">O'zbekcha</option>
      <option value="en">English</option>
      <option value="ru">Русский</option>
    </select>
  );
});

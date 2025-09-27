import { memo } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = memo(() => {
  const { i18n } = useTranslation();

  console.log(i18n.language);

  return (
    <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
      <option value="uz">uz</option>
      <option value="en">en</option>
      <option value="ru">ru</option>
    </select>
  );
});

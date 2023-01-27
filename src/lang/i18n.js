import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import kz from "./locale/kz/translation.json";
import ru from "./locale/ru/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "kz",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      kk: kz,
      ru: ru,
    },
    ns: ["translations"],
  });

export default i18n;

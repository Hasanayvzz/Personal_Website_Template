import { useLanguageStore } from "@/stores/languageStore";
import en from "@/locales/en.json";
import tr from "@/locales/tr.json";

const translations = { en, tr };

export const useTranslation = () => {
  const { language } = useLanguageStore();

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: unknown = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  return { t, language };
};

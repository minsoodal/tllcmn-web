export const languages = ["ko", "en"] as const;

export type Lang = (typeof languages)[number];

export const fallbackLanguage: Lang = "ko";

export function isLang(value: string): value is Lang {
  return (languages as readonly string[]).includes(value);
}

export function getAlternateLanguage(lang: Lang): Lang {
  return lang === "ko" ? "en" : "ko";
}

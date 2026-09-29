import en from "./en.json";
import es from "./es.json";

export type Locale = "en" | "es";
export const dictionaries = { en, es } as const;
export const getDictionary = (locale: Locale) => dictionaries[locale];

export const categories = ["sports", "portrait", "editorial", "weddings"] as const;
export type CategorySlug = (typeof categories)[number];

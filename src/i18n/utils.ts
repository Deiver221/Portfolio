import { translations, defaultLang, type Language } from "./translations"

export function getLang(): Language {
  if (typeof localStorage !== "undefined") {
    const stored = localStorage.getItem("lang")
    if (stored === "en" || stored === "es") return stored
  }
  return defaultLang
}

export function setLang(lang: Language) {
  localStorage.setItem("lang", lang)
}

export function t(lang: Language) {
  return translations[lang]
}
import { useState, useEffect } from "react"
import { getLang, setLang } from "../i18n/utils"
import type { Language } from "../i18n/translations"

export default function LanguageToggle() {
  const [lang, setLangState] = useState<Language>("en")

  useEffect(() => {
    setLangState(getLang())
  }, [])

  function handleToggle(newLang: Language) {
    setLang(newLang)
    setLangState(newLang)
    window.dispatchEvent(new CustomEvent("langchange", { detail: newLang }))
  }

  return (
    <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-1 py-1 text-xs">
      {(["en", "es"] as Language[]).map((l) => (
        <button
          key={l}
          onClick={() => handleToggle(l)}
          className={`px-2.5 py-1 rounded-full transition-colors font-medium uppercase ${
            lang === l
              ? "bg-white/15 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
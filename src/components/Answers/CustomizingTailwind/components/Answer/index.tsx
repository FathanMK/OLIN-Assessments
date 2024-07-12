import { useState } from "react"

type TLang = "id" | "en"

export default function Answer() {
  const [lang, setLang] = useState<TLang>("id")

  const labelLang = `Lihat dalam Bahasa ${lang === "id" ? "Inggris" : "Indonesia"}`
  const idContent = { __html: `<p>Kalau saya biasanya hanya tinggal meng-extend colors yang sudah ada di Tailwind dengan color yang saya ingin kan.</p><p>Tinggal edit di file tailwind.config.js</p>` }
  const enContent = { __html: `<p>I usually just extend the existing colors in Tailwind with the colors I want.</p> <p>Just edit in tailwind.config.js file</p>` }

  const handleLang = () => (lang === "id") ? setLang("en") : setLang("id")

  return (
    <div>
      <div className="flex justify-end">
        <button className="button-primary" onClick={handleLang}>{labelLang}</button>
      </div>
      <div className="mt-4 text-ghost-white" dangerouslySetInnerHTML={lang === "id" ? idContent : enContent} />
    </div>
  )
}
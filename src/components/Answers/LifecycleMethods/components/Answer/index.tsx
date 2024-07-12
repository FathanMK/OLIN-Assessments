import { useState } from "react"

type TLang = "id" | "en"

export default function Answer() {
  const [lang, setLang] = useState<TLang>("id")

  const labelLang = `Lihat dalam Bahasa ${lang === "id" ? "Inggris" : "Indonesia"}`
  const idContent = { __html: `<p>componentDidMount adalah sebuah urutan pada sirkulasi sebuah komponen dalam react, biasanya dipanggil setelah komponen selesai Render.</p><p>Paling sering dipakai saat ingin mendapatkan Response data dari API.</p><p>Contoh ada dibawah.</p>` }
  const enContent = { __html: `<p>componentDidMount is a lifecycle method in a React component, usually called after the component has finished rendering.</p> <p>It is most often used when you want to get response data from an API.</p><p>Example below.</p>` }

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
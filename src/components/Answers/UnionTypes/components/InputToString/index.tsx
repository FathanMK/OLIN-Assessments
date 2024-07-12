import { ChangeEvent, useEffect, useState } from "react"
import InputToStringFN from "../../utils/InputToString"

export default function InputToString() {
  const [word, setWord] = useState("")
  const [debouncedValue, setDebouncedValue] = useState("")
  const [result, setResult] = useState<null | string>(null)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(word)
    }, 750)

    return () => clearTimeout(timeout)
  }, [word])

  useEffect(() => {
    const resultString = InputToStringFN(debouncedValue)

    setResult(resultString)
  }, [debouncedValue])

  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col gap-2 w-full">
        <input className="bg-transparent border-b-2 border-ghost-white/40 pb-1 text-ghost-white placeholder:text-ghost-white/50 focus-visible:outline-none" placeholder="Type anything" onChange={handleOnChange} />
        <p className="text-ghost-white">Input to String: {result}</p>
        <p className="text-ghost-white">Result type: {typeof result}</p>
      </div>
    </div>
  )
}
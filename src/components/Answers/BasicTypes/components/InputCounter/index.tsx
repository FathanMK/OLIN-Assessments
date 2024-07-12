import { ChangeEvent, useEffect, useState } from "react"

import CharactersCounter from "../../utils/StringCounter"

export default function InputCounter() {
  const [length, setLength] = useState(0)
  const [word, setWord] = useState("")
  const [debouncedValue, setDebouncedValue] = useState("")

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
    const totalCount = CharactersCounter(debouncedValue)

    setLength(totalCount)
  }, [debouncedValue])

  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col gap-2 w-full">
        <input className="bg-transparent border-b-2 border-ghost-white/40 pb-1 text-ghost-white placeholder:text-ghost-white/50 focus-visible:outline-none" placeholder="Type anything" onChange={handleOnChange} />
        <p className="text-ghost-white">Character Counts: {length}</p>
      </div>
    </div>
  )
}
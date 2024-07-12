import type { IPerson } from "../../interfaces/IPerson"

import { useState } from "react"

import GreetingFN from "../../utils/Greeting"

export default function Greeting() {
  const [person] = useState<IPerson>({ name: "Fathan", age: 25 })
  return (
    <p className="text-ghost-white">{GreetingFN(person)}</p>
  )
}
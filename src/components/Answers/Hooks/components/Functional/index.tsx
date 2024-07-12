import { useEffect, useState } from "react"

export default function Functional() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const dateInterval = setInterval(() => {
      setDate(new Date())
    }, 1000)


    return () => clearInterval(dateInterval)
  }, [])

  return (
    <div>
      <p className="text-ghost-white">{date.toLocaleTimeString()}</p>
    </div>
  )
}
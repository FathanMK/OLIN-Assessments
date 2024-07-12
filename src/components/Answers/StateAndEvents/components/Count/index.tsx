import { useState } from "react"

export default function Count() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className="flex flex-1 h-full justify-center items-center gap-4 ">
      <button disabled={count === 0} className="button-secondary disabled:opacity-50 disabled:cursor-not-allowed" onClick={handleDecrement}>Decrement</button>
      <p className="text-xl font-extrabold text-ghost-white">{count}</p>
      <button className="button-secondary" onClick={handleIncrement}>Increment</button>
    </div>
  )
}
import Code from "../../Code";
import Count from "./components/Count";

export default function StatesAndEvents() {
  const code = `./components/Count/index.tsx

export default function Count() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="flex flex-1 h-full justify-center items-center gap-4 ">
      <button className="border-2 border-pink-500 px-5 py-2 rounded-md" onClick={handleDecrement}>Decrement</button>
      <p className="text-xl font-extrabold">{count}</p>
      <button className="border-2 border-pink-500 px-5 py-2 rounded-md" onClick={handleIncrement}>Increment</button>
    </div>
  )
}`

  return (
    <section className="p-4">
      <div>
        <h2 className="text-2xl font-bold">2. States and Events</h2>
        <h3 className="text-lg font-medium mt-4">Create a counter component with two butttons: one to increment the count and one to decrement it.<br />Display the current count.
        </h3>
      </div>
      <div className="mt-8">
        <h4 className="text-xl font-bold">Answers: </h4>
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <div className="rounded p-4 lg:basis-1/2 bg-blue-800">
            <Count />
          </div>
          <div className="lg:basis-1/2">
            <Code code={code} />
          </div>
        </div>
      </div>
    </section>
  )
}
import Code from "../../Code";
import InputToString from "./components/InputToString";

export default function UnionTypes() {
  const code = `./utils/InputToString.tsx
  
export default function InputToString(input: TInput) {
  return String(input)
}
  
./components/InputToString/index.tsx

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
`

  return (
    <section className="p-4">
      <div>
        <h2 className="text-2xl font-bold">8. Union Types</h2>
        <h3 className="text-lg font-medium mt-4">Create a type alias `Input` that can be a string or number. <br /> Write a function that takes an `Input` and returns it string representation</h3>
      </div>
      <div className="mt-8">
        <h4 className="text-xl font-bold">Answers: </h4>
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <div className="rounded p-4 lg:basis-1/2 bg-red-800">
            <InputToString />
          </div>
          <div className="lg:basis-1/2">
            <Code code={code} />
          </div>
        </div>
      </div>
    </section>
  )
}
import Code from "../../Code"
import InputCounter from "./components/InputCounter"

export default function BasicTypes() {
  const code = `./utils/StringCounter.ts
  
export default function CharactersCounter(string: String) {
  return string.length
}`

  return (
    <section className="p-4">
      <div>
        <h2 className="text-2xl font-bold">5. Basic Types</h2>
        <h3 className="text-lg font-medium mt-4">Define a function that takes a string and returns its length.<br />Ensure proper type annotations.
        </h3>
      </div>
      <div className="mt-8">
        <h4 className="text-xl font-bold">Answers: </h4>
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <div className="rounded p-4 lg:basis-1/2 bg-slate-600 flex-grow">
            <InputCounter />
          </div>
          <div className="lg:basis-1/2">
            <Code code={code} />
          </div>
        </div>
      </div>
    </section>
  )
}
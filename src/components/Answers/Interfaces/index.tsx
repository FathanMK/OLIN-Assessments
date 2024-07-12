import Code from "../../Code";
import Greeting from "./components/Greeting";

export default function Interface() {
  const code = `./utils/Greeting.ts

export default function Greeting(person: IPerson) {
  return \`Hello, my name is \${person.name} and my age is \${person.age}\`
  }
  
./components/Greeting/index.tsx

export default function Greeting() {
  const [person] = useState<IPerson>({ name: "Fathan", age: 25 })
  return (
    <p>{GreetingFN(person)}</p>
  )
}`

  return (
    <section className="p-4">
      <div>
        <h2 className="text-2xl font-bold">6. Interfaces</h2>
        <h3 className="text-lg font-medium mt-4">Create an interface `Person` with properties `name` (string) and `age` (number). <br /> Then, write a function that takes a `Person` object and returns a greeting string.</h3>
      </div>
      <div className="mt-8">
        <h4 className="text-xl font-bold">Answers: </h4>
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <div className="rounded p-4 lg:basis-1/2 bg-lime-700">
            <Greeting />
          </div>
          <div className="lg:basis-1/2">
            <Code code={code} />
          </div>
        </div>
      </div>
    </section>
  )
}
import Code from "../../Code";
import GenericsComponent from "./components/Generics";

export default function Generics() {
  const code = `./components/Generics/utils/Generic.ts
export default function Generic<Type>(arg: Type): Type {
  return arg;
}

./components/Generics/index.tsx
export default function Generics() {
  const stringType = Generic("ini string")
  const numberType = Generic(0)
  const arrayType = Generic(["a", "b", "c"])
  
  return (
    <div className="text-ghost-white">
      <div>
        <p>{stringType}</p>
        <p>Type: {typeof stringType}</p>
      </div>
      <div>
        <p>{numberType}</p>
        <p>Type: {typeof numberType}</p>
      </div>
      <div>
        <p>{arrayType}</p>
        <p>Type: {typeof arrayType}</p>
      </div>
    </div>
  )
}`

  return (
    <section className="p-4">
      <div>
        <h2 className="text-2xl font-bold">7. Generics</h2>
        <h3 className="text-lg font-medium mt-4">Write a generic funciton `Identity` that takes and argument and returns it.<br /> Ensure it works with any type.</h3>
      </div>
      <div className="mt-8">
        <h4 className="text-xl font-bold">Answers: </h4>
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <div className="rounded p-4 lg:basis-1/2 bg-emerald-700">
            <GenericsComponent />
          </div>
          <div className="lg:basis-1/2">
            <Code code={code} />
          </div>
        </div>
      </div>
    </section>
  )
}
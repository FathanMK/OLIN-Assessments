import Code from "../../Code";
import List from "./components/List";
import fruits from "../../../data/fruits.json"

export default function BasicComponent() {
  const code = `./components/List/index.tsx
  
interface IListProps {
  data: string[]
}

export default function List({ data }: IListProps) {
  return (
    <ul>
      {data.map((item) => <li>{item}</li>)}
    </ul>
  )
}`

  return (
    <section className="p-4">
      <div>
        <h2 className="text-2xl font-bold">1. Basic Component</h2>
        <h3 className="text-lg font-medium mt-4">Create a simple React Component that displays a list of items passed to it via props.<br />The list should be rendered as an unordered list.
        </h3>
      </div>
      <div className="mt-8">
        <h4 className="text-xl font-bold">Answers: </h4>
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <div className="rounded p-4 lg:basis-1/2 bg-green-800">
            <List data={fruits} />
          </div>
          <div className="lg:basis-1/2">
            <Code code={code} />
          </div>
        </div>
      </div>
    </section>
  )
}
import Generic from "./utils/Generic";

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
}
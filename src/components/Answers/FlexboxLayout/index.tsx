import Code from "../../Code";
import EquallySpacedItems from "./components/EquallySpacedItems";

export default function FlexboxLayout() {
  const code = `./components/EquallySpacedItems/index.tsx
  
export default function EquallySpacedItems() {
  return (
    <div className="flex gap-4 justify-center overflow-x-auto whitespace-nowrap">
      <img className="object-cover w-60" src="/image.jpg" />
      <img className="object-cover w-60" src="/image-1.jpg" />
      <img className="object-cover w-60" src="/image-2.jpg" />
    </div>
  )
}`

  return (
    <section className="p-4">
      <div>
        <h2 className="text-2xl font-bold">11. Flexbox Layout</h2>
        <h3 className="text-lg font-medium mt-4">Create a flex container with three equally spaced items. Each item should be centered both vertically and horizontally.</h3>
      </div>
      <div className="mt-8">
        <h4 className="text-xl font-bold">Answers: </h4>
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <div className="flex justify-center min-h-[600px] items-center rounded p-4 lg:basis-1/2 bg-teal-800">
            <EquallySpacedItems />
          </div>
          <div className="lg:basis-1/2">
            <Code code={code} />
          </div>
        </div>
      </div>
    </section>
  )
}
import Code from "../../Code";

export default function BasicStyling() {
  const code = `<button className="bg-blue-500 text-white rounded px-4 py-2">Button</button>`

  return (
    <section className="p-4">
      <div>
        <h2 className="text-2xl font-bold">9. Basic Styling</h2>
        <h3 className="text-lg font-medium mt-4">Create a button using Tailwind CSS classes that has a blue background, white text and rounded corners.</h3>
      </div>
      <div className="mt-8">
        <h4 className="text-xl font-bold">Answers: </h4>
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <div className="rounded p-4 flex justify-center items-center lg:basis-1/2 bg-red-800">
            <button className="bg-blue-500 text-white rounded px-4 py-2">
              Button
            </button>
          </div>
          <div className="lg:basis-1/2">
            <Code code={code} />
          </div>
        </div>
      </div>
    </section>
  )
}
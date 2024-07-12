import Code from "../../Code";

export default function ResponsiveDesign() {
  const code = `<div className="rounded p-4 basis-1/2 sm:bg-blue-500 md:bg-green-500 bg-red-500">
  <p className="text-ghost-white">Resize the window</p>
</div>`

  return (
    <section className="p-4">
      <div>
        <h2 className="text-2xl font-bold">10. Responsive Design</h2>
        <h3 className="text-lg font-medium mt-4">Write a div that changes its background color based on the screen size: blue for small screens, green for medium screens, and red for large screens.</h3>
      </div>
      <div className="mt-8">
        <h4 className="text-xl font-bold">Answers: </h4>
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <div className="rounded p-4 lg:basis-1/2 sm:bg-blue-500 md:bg-green-500 bg-red-500">
            <p className="text-ghost-white">Resize the window</p>
          </div>
          <div className="lg:basis-1/2">
            <Code code={code} />
          </div>
        </div>
      </div>
    </section>
  )
}
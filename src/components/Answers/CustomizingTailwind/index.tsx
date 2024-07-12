import Code from "../../Code";
import Answer from "./components/Answer";

export default function CustomizingTailwind() {
  const code = `
  // tailwind.config.js
  export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...,
        "custom-blue": "#0048ba",
      },
    },
  },
  plugins: [],
};`

  return (
    <section className="p-4">
      <div>
        <h2 className="text-2xl font-bold">12. Customizing Tailwind</h2>
        <h3 className="text-lg font-medium mt-4">Explain how you would add a custom color to the Tailwind CSS configuration. Provide an example of adding a custom-blue color.</h3>
      </div>
      <div className="mt-8">
        <h4 className="text-xl font-bold">Answers: </h4>
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <div className="rounded p-4 flex flex-col text-ghost-white lg:basis-1/2 bg-pink-800">
            <div className="h-full flex flex-grow flex-col gap-8 justify-center items-center">
              <div className="flex flex-col gap-2">
                <p>With bg-blue-500</p>
                <button className="bg-blue-500 text-white rounded px-4 py-2">
                  Button
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <p>with bg-custom-blue</p>
                <button className="bg-custom-blue text-white rounded px-4 py-2">
                  Button
                </button>
              </div>
            </div>
            <Answer />
          </div>
          <div className="lg:basis-1/2">
            <Code code={code} />
          </div>
        </div>
      </div>
    </section>
  )
}
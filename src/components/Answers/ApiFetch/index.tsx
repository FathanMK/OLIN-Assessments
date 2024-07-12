import Code from "../../Code";

import { useQuery } from "@tanstack/react-query";

export default function APIFetch() {
  const { data: pokemon, isLoading, isError, refetch } = useQuery({
    queryKey: ["pokemon-api"],
    queryFn: async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/arcanine")
      const json = await res.json()

      const data = { abilities: json.abilities, height: json.height, weight: json.weight }
      return data
    },
  })

  const code = `export default function APIFetch() {
  const { data: pokemon, isLoading, isError, refetch } = useQuery({
    queryKey: ["pokemon-api"],
    queryFn: async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/arcanine")
      const json = await res.json()

      const data = { abilities: json.abilities, height: json.height, weight: json.weight }
      return data
    },
  })
    
  return (
    <section className="p-4">
      <div>
        <h2 className="text-2xl font-bold">13. API Fetch</h2>
        <h3 className="text-lg font-medium mt-4">Write an async function named fetchData that fetches data from a given URL and returns the JSON response.<br /> If the fetch fails, the function should return an error message.</h3>
      </div>
      <div className="mt-8">
        <h4 className="text-xl font-bold">Answers: </h4>
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <div className="lg:basis-1/2 ">
            {isLoading  && <p className="text-ghost-white">Loading...</p>}
            {!isLoading &&
              <div className="bg-[#2d2d2d] rounded-md p-4">
                {isError ?
                  <div className="flex flex-col gap-4">
                    <p className="text-ghost-white">Something went wrong</p>
                    <button className="button-secondary" onClick={() => refetch()}>Refetch</button>
                  </div>
                  :
                  <pre>
                    <code className="language-json rounded">{JSON.stringify(pokemon, null, 4)}</code>
                  </pre>
                }
              </div>
            }
          </div>
          <div className="lg:basis-1/2">
            <Code code={code} />
          </div>
        </div>
      </div>
    </section>
  )
}`

  return (
    <section className="p-4">
      <div>
        <h2 className="text-2xl font-bold">13. API Fetch</h2>
        <h3 className="text-lg font-medium mt-4">Write an async function named fetchData that fetches data from a given URL and returns the JSON response.<br /> If the fetch fails, the function should return an error message.</h3>
      </div>
      <div className="mt-8">
        <h4 className="text-xl font-bold">Answers: </h4>
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <div className="lg:basis-1/2 ">
            {isLoading  && <p className="text-ghost-white">Loading...</p>}
            {!isLoading &&
              <div className="bg-[#2d2d2d] rounded-md p-4">
                {isError ?
                  <div className="flex flex-col gap-4">
                    <p className="text-ghost-white">Something went wrong</p>
                    <button className="button-secondary" onClick={() => refetch()}>Refetch</button>
                  </div>
                  :
                  <pre>
                    <code className="language-json rounded">{JSON.stringify(pokemon, null, 4)}</code>
                  </pre>
                }
              </div>
            }
          </div>
          <div className="lg:basis-1/2">
            <Code code={code} />
          </div>
        </div>
      </div>
    </section>
  )
}
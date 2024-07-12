import { useEffect } from "react";
import { Expand } from "@theme-toggles/react";
import Prism from "prismjs"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import useTheme from "./hooks/useTheme";
import BasicComponent from "./components/Answers/BasicComponent";
import StatesAndEvents from "./components/Answers/StateAndEvents";
import Hooks from "./components/Answers/Hooks";
import BasicTypes from "./components/Answers/BasicTypes";
import Interface from "./components/Answers/Interfaces";
import Generics from "./components/Answers/Generics";
import UnionTypes from "./components/Answers/UnionTypes";
import BasicStyling from "./components/Answers/BasicStyling";
import ResponsiveDesign from "./components/Answers/ResponsiveDesign";
import FlexboxLayout from "./components/Answers/FlexboxLayout";
import CustomizingTailwind from "./components/Answers/CustomizingTailwind";
import LifecycleMethods from "./components/Answers/LifecycleMethods";
import APIFetch from "./components/Answers/ApiFetch";

const queryClient = new QueryClient()

export default function App() {
  const { isDark, setDark } = useTheme()

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <main>
      <nav className="flex p-4">
        <div className="w-6 h-6"></div>
        <h1 className="flex-grow text-center font-black text-4xl">OLIN ASSESSMENTS</h1>
        {/* @ts-ignore */}
        <Expand className="ml-auto text-2xl" toggled={isDark} toggle={setDark} />
      </nav>
      <BasicComponent />
      <StatesAndEvents />
      <LifecycleMethods />
      <Hooks />
      <BasicTypes />
      <Interface />
      <Generics />
      <UnionTypes />
      <BasicStyling />
      <ResponsiveDesign />
      <FlexboxLayout />
      <CustomizingTailwind />
      <QueryClientProvider client={queryClient}>
        <APIFetch />
      </QueryClientProvider>
    </main>
  )
}
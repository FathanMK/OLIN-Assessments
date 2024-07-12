import Code from "../../Code";
import Timer from "./components/Class";
import Functional from "./components/Functional";

export default function Hooks() {
  const code = `./components/Class/index.tsx
  
interface IProps { }

interface IState {
  date: Date
}

class Timer extends Component<IProps, IState> {
  // private timerID: NodeJS.Timeout
  private timerID: any

  constructor(props: IProps) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount(): void {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount(): void {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <div>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }
}

export default Timer`

  const code1 = `./components/Functional/index.tsx

export default function Functional() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const dateInterval = setInterval(() => {
      setDate(new Date())
    }, 1000)


    return () => clearInterval(dateInterval)
  }, [])

  return (
    <div>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  )
}`

  return (
    <section className="p-4">
      <div>
        <h2 className="text-2xl font-bold">4. Hooks</h2>
        <h3 className="text-lg font-medium mt-4">Convert a class-based component to a functional component using hooks.<br />The component should display a timer that increments every second.
        </h3>
      </div>
      <div className="mt-8">
        <h4 className="text-xl font-bold">Answers: </h4>
        <div className="mt-4">
          <h5 className="text-lg font-bold">Class-Based</h5>
          <div className="flex flex-col lg:flex-row gap-4 mt-4">
            <div className="rounded p-4 lg:basis-1/2 bg-orange-800">
              <Timer />
            </div>
            <div className="lg:basis-1/2">
              <Code code={code} />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h5 className="text-lg font-bold">Functional</h5>
          <div className="flex flex-col lg:flex-row gap-4 mt-4">
            <div className="rounded p-4 lg:basis-1/2 bg-orange-800">
              <Functional />
            </div>
            <div className="lg:basis-1/2">
              <Code code={code1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
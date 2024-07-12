import Code from "../../Code";
import Answer from "./components/Answer";
import Example from "./components/Example";

export default function LifecycleMethods() {
  const code = `./components/Example/index.tsx

interface IProps {

}

interface IState {
  users: any[]
}

class Example extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      users: []
    }
  }
  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ users: json }))
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default Example`

  return (
    <section className="p-4">
      <div>
        <h2 className="text-2xl font-bold">3. Lifcycle Methods</h2>
        <h3 className="text-lg font-medium mt-4">Explain the purpose of `componentDidMount` and provide a simple example of its usage.
        </h3>
      </div>
      <div className="mt-8">
        <h4 className="text-xl font-bold">Answers: </h4>
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <div className="rounded p-4 lg:basis-1/2 bg-yellow-900">
            <Answer />
            <Example />
          </div>
          <div className="lg:basis-1/2">
            <Code code={code} />
          </div>
        </div>
      </div>
    </section>
  )
}
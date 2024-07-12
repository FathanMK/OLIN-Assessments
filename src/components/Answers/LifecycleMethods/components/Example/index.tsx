import { Component } from "react";

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
      <div className="mt-4">
        <ul className="text-ghost-white">
          {this.state.users.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default Example
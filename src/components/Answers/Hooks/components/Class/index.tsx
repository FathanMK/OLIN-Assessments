import { Component } from "react";

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
        <p className="text-ghost-white">{this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }
}

export default Timer
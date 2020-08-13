import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }
  render() {
    return (
      <div>
        <h2> 当前计数:{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <hr />
        <ChildCpn increment={e => this.increment()} />
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
}

function ChildCpn(props) {
  return <button onClick={props.increment}>+1</button>
}

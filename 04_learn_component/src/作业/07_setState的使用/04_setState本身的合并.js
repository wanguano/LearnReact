import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()

    this.state = { counter: 0 }
  }

  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
      </div>
    )
  }

  increment() {
    // setState本身的合并: 多个setState更新,会将多次更新的state进行合并
    // 只有最后一个state生效
    // this.setState({ counter: this.state.counter + 1 })
    // this.setState({ counter: this.state.counter + 2 })
    // this.setState({ counter: this.state.counter + 3 })
    // this.setState({ counter: this.state.counter + 4 })
    // 如果解决: 传递函数即可
    this.setState((preState, preProps) => {
      return { counter: preState.counter + 1 }
    })
    this.setState((preState, preProps) => {
      return { counter: preState.counter + 1 }
    })
    this.setState((preState, preProps) => {
      return { counter: preState.counter + 1 }
    })
    this.setState((preState, preProps) => {
      return { counter: preState.counter + 1 }
    })
  }
}

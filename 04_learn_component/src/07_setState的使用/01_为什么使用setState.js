import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }
  render() {
    console.log(this)
    return (
      <div>
        <h2>当前计数{this.state.count}</h2>
        <button onClick={e => this.increment()}>+</button>
      </div>
    )
  }

  increment() {
    // 不能在方法中直接修改state
    // this.state.count += 1
    // console.log(this.state.count)

    // setState是从哪来的呢?
    // 继承自Component
    this.setState({
      count: this.state.count + 1,
    })
  }
}

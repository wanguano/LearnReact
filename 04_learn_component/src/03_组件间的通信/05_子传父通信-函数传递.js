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
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+</button>
        {/* 子传父: 让子组件来调用父组件中的方法 */}
        {/* 操作步骤: 父组件传递一个回调函数,让子组件来进行调用 */}
        <Counter increment={e => this.increment()} />
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
}

class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increment}>+</button>
      </div>
    )
  }
}

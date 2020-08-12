import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }
  render() {
    return (
      <div>
        <h2>当前计数{this.state.count}</h2>
        <button onClick={e => this.increment()}>+</button>
      </div>
    )
  }

  increment() {
    // setState的本身的合并问题
    // 1.问题: 当我们调用了多个setState为什么state状态只更改了一次?
    // 因为: 在React源码中执行setState时,会对其进行多次setState进行合并,多次调用setState只有最后一次生效
    // 前面我们讲到了,在设置state时,会进行Object.assign进行合并
    // this.setState({ count: this.state.count + 1 })
    // this.setState({ count: this.state.count + 2 })
    // this.setState({ count: this.state.count + 3 })

    // 2.setState合并时进行累加
    this.setState((prevState, props) => {
      return { count: prevState.count + 1 }
    })
    this.setState((prevState, props) => {
      return { count: prevState.count + 1 }
    })
    this.setState((prevState, props) => {
      return { count: prevState.count + 1 }
    })
  }
}

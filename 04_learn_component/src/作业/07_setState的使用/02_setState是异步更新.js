import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()

    this.state = { name: 'jean', age: 18 }
  }

  render() {
    return (
      <div>
        <h2>{this.state.name + ' ' + this.state.age}</h2>
        <button onClick={e => this.changeText()}>修改文本</button>
      </div>
    )
  }

  changeText() {
    // setState是异步更新的:
    // 为什么这么设计呢?
    // 如果频繁的更新状态,页面频繁的更新,那么性能是非常低下的
    // 异步更新会设置一个延迟时间,在这段延迟的事件再次更新了state时
    // 会将setState的更新整合在一起进行更新

    // 方式一: 获取setState异步更新的结果
    this.setState({ name: 'kobe', age: 20 }, () => {
      // console.log(this.state.name)
    })
    // console.log(this.state.name) // --> jean
  }

  // 方式二:
  componentDidUpdate() {
    console.log(arguments.length)
    console.log(this.state.name)
  }
}


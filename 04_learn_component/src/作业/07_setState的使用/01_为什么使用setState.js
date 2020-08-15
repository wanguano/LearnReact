import React, { Component } from 'react'
// 为什么使用setState
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
    // 开发中不能直接修改state
    // 1.违反了React单项数据流
    // 2.不利于性能优化
    // 3.React不能响应式的进行render更新
    // 只能用setState来修改state
    // 但是setState是从何而来的? --> 继承自Component
    this.setState({ name: 'kobe', age: 20 })
  }
}

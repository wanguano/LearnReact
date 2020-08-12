import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      message: 'hello world',
    }
  }

  render() {
    console.log('App render函数被调用')
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.changeText()}>改变文本</button>
      </div>
    )
  }

  // 当counter发生改变界面发生更新,调用render函数
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  // 当我们有的数据不在页面展示: 更新state时,不要进行调用render时,使用shouldComponentUpdate生命周期函数
  changeText() {
    this.setState({
      message: '你好啊,李银河',
    })
  }

  // 不进行调用render函数
  shouldComponentUpdate(nextProps, nextState) {
    // 默认是: return true
    // return false
    // 进行对页面渲染的state进行判断,如果需要在页面上渲染,则调用render
    if (this.state.counter !== nextState.counter) {
      return true
    }

    // 不需要在页面上渲染则不调用render函数
    return false
  }
}

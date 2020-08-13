import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.titleRef = createRef()
    this.titleEl = null
    this.counterRef = createRef()
  }
  render() {
    return (
      <div>
        {/* <h2 ref=字符串/对象/函数方式> hello react</h2> */}
        <h2 ref="titleRef">hello react</h2>
        <h2 ref={this.titleRef}>hello react</h2>
        <h2 ref={arg => (this.titleEl = arg)}>hello react</h2>
        <button onClick={e => this.changeText()}>改变文本</button>
        <hr />
        <Counter ref={this.counterRef} />
        <button onClick={e => this.appIncrementCount()}>APP的按钮</button>
      </div>
    )
  }
  changeText() {
    // 1.通过refs来操作DOM,有三种方式
    // 方式一: 字符串
    this.refs.titleRef.innerHTML = 'hello jean'
    // 方式二: 对象
    this.titleRef.current.innerHTML = 'hello JavaScript'
    // 方式三: 函数
    this.titleEl.innerHTML = 'hello TypeScript'
  }

  appIncrementCount() {
    // 通过ref来获取类组件对象
    // 调用子组件方法
    this.counterRef.current.increment()
  }
}

class Counter extends PureComponent {
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
        <button onClick={e => this.increment()}>+1</button>
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
}

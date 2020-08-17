import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.titleRef = createRef()
    this.titleEl = null
  }
  render() {
    return (
      <div>
        refs的使用
        {/* string */}
        <h3 ref="titleRef">我是标题</h3>
        {/* 对象方式 */}
        <h3 ref={this.titleRef}>我是标题</h3>
        {/* 函数方式 */}
        <h3 ref={arg => (this.titleEl = arg)}>我是标题</h3>
        <button onClick={e => this.changeText()}>改变文本</button>
      </div>
    )
  }

  changeText() {
    // 1.ref 字符串方式
    this.refs.titleRef.innerHTML = 'hello world'
    // 2.object方式
    this.titleRef.current.innerHTML = 'hello object'
    // 3.函数方式
    this.titleEl.innerHTML = 'hello function'
  }
}

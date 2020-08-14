import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    // 非受控组件: 不是使用state来进行管理表单,使用DOM来操作表单: ref
    this.username = createRef()
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username"> 用户名: </label>
          {/* 非受控组件 */}
          <input type="text" id="username" ref={this.username} />
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.username.current.value)
  }
}

import React, { Component } from 'react'

export default class App extends Component {
  // 初始化阶段: 初始化state和绑定this
  constructor() {
    super()
    this.state = {
      message: 'hello world',
      isLogin: true,
    }
    console.log('执行了组件constructor被调用了')
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={e => this.changeText()}>改变本文</button>
        <hr />
        <button onClick={e => this.uninstall()}>卸载组件</button>
        {this.state.isLogin && <Home />}
      </div>
    )
  }

  changeText() {
    this.setState({
      message: '你好啊,李银河',
    })
  }

  // 组件挂载到DOM上执行
  componentDidMount() {
    console.log('执行了组件componentDidMount被调用了')
  }

  // 组件中state发生更新后执行
  componentDidUpdate() {
    console.log('执行了组件componentDidUpdate被调用了')
  }

  uninstall() {
    this.setState({
      isLogin: !this.state.isLogin,
    })
  }
}

class Home extends Component {
  componentWillUnmount() {
    console.log('执行了组件componentWillUnmount被调用了')
  }
  render() {
    return <div>Home组件</div>
  }
}

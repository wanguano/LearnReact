import React, { Component } from 'react'

class Cpn extends Component {
  render() {
    return <h2>我是CPN组件</h2>
  }

  // 组件被卸载及销毁之前
  componentWillUnmount() {
    console.log('执行了组件的componentWillUnmount方法')
  }
}

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0,
      isShow: true,
    }
    console.log('执行了组件的constructor方法')
  }

  render() {
    console.log('执行了组件的render方法')
    return (
      <div>
        <h2>我是App组件</h2>
        <h2>当前计数：{this.state.count}</h2>
        <button onClick={e => this.increment()}>+</button>
        <hr />
        <button onClick={e => this.changeCpnShow()}>移除CPN组件</button>
        {this.state.isShow && <Cpn />}
      </div>
    )
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  // 组件已经挂载到DOM上时触发
  componentDidMount() {
    console.log('执行了组件的componentDidMount方法')
  }

  // 组件中的state发生更新时
  // snapshot: getSnapshotBeforeUpdate()生命周期函数返回的对象
  componentDidUpdate(preProps, preState, snapshot) {
    console.log('执行了组件的componentDidUpdate方法')
  }

  changeCpnShow() {
    this.setState({
      isShow: !this.state.isShow,
    })
  }
}

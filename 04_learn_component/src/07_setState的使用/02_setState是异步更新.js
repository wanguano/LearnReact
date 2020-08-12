import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'hello world',
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={e => this.changeText()}>改变文本</button>
        <Home message={this.state.message} />
      </div>
    )
  }

  changeText() {
    // setState是异步更新的
    // this.setState({
    //   message: '你好啊,李银河',
    // })

    // 打印的依然是未更新的message,由此可证明setState是异步更新的
    // console.log(this.state.message) // hello world
    /* 1.如果同步更新了state,但还没有执行render函数
     *  state和props不能保持一致性,会在开发中产生很多问题
     * 2.获取异步更新后的state
     *  setState(更新的state,callback)
     */
    // 方式一: setState(更新的state,callback)
    this.setState({ message: '你好啊,李银河' }, () => {
      console.log(this.state.message) // -> 你好啊,李银河
    })
  }

  changeText() {
    // 方式一: 通过setState第二个参数,获取setState异步更新的后state
    this.setState({ message: '你好啊,李银河' }, () => {
      console.log(this.state.message) // -> 你好啊,李银河
    })
  }



  // 组件中state发生更新,获取setState异步更新的结果
  componentDidUpdate() {
    console.log(this.state.message) // -> 你好啊,李银河
  }




}

function Home(props) {
  return <h2>{props.message}</h2>
}

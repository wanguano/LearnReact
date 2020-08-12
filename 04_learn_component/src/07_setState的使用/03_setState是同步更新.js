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
        <button id="btn">DOM原生事件改变文本</button>
      </div>
    )
  }

  changeText() {
    // setState一定是异步吗?
    // 不一定:在React的setState源码中,会根据执行上下文,来决定是异步还是同步更新
    // 情况一: 在setTimeout中执行是同步的
    setTimeout(() => {
      this.setState({ message: '你好啊,李银河' })
      console.log(this.state.message)
    }, 0)
  }

  // 情况二:DOM原生监听事件中执行是同步的
  componentDidMount() {
    document.getElementById('btn').addEventListener('click', e => {
      this.setState({ message: '你好啊,李银河' })
      console.log(this.state.message) // -> 你好啊,李银河
    })
  }
}

function Home(props) {
  return <h2>{props.message}</h2>
}

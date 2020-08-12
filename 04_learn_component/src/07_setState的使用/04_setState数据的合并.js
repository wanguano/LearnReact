import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'hello world',
      name: 'luck',
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <h2>{this.state.name}</h2>
        <button onClick={e => this.changeText()}>改变文本</button>
        <Home message={this.state.message} />
      </div>
    )
  }

  changeText() {
    // setState数据的合并: 当你更新state时,name数据并没有填会不会被覆盖掉?
    // 不会的,React内部是进行了: 浅拷贝
    // Object.assign({}, preState, { message: '你好啊,李银河' })
    this.setState({ message: '你好啊,李银河' })
  }
}

function Home(props) {
  return <h2>{props.message}</h2>
}

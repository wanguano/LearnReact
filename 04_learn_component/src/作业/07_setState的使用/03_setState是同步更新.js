import React, { Component } from 'react'

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
        <button id="btn">修改文本</button>
      </div>
    )
  }

  changeText() {
    // setState是同步更新:
    // 情况一: setTimeout
    setTimeout(() => {
      this.setState({
        name: 'kill',
        age: 20,
      })
      console.log(this.state.name)
    }, 0)
  }

  componentDidMount() {
    // 情况二: JS原生事件
    document.querySelector('#btn').addEventListener('click', () => {
      this.setState({
        name: 'kill',
        age: 20,
      })
      console.log(this.state.name)
    })
  }
}


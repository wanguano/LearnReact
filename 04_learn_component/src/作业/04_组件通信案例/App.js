import React, { Component } from 'react'
import TabControl from './TabControl'
import './style.css'
export default class App extends Component {
  constructor() {
    super()
    this.titles = ['流行', '新款', '精选']
    this.state = {
      titleIndex: 0,
    }
  }
  render() {
    const massage = this.titles[this.state.titleIndex]
    return (
      <div>
        <TabControl
          titles={this.titles}
          changeTitle={index => this.changeTitle(index)}
        />
        <h2>{massage}</h2>
      </div>
    )
  }

  changeTitle(index) {
    this.setState({
      titleIndex: index,
    })
  }
}

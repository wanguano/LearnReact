// import React from 'react'
// import {Component} from 'react'
import React, { Component } from 'react'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 1,
    }
  }

  render() {
    return (
      <div>
        <h2>当前计数{this.state.count}</h2>
        <button onClick={e => {this.increment()}}>+</button>
        <button onClick={e => {this.decrement()}}>-</button>
      </div>
    )
  }

  increment() {
    this.setState({
      count: this.state.count+1
    })
  }

  decrement() {
    this.setState({
      count: this.state.count-1
    })
  }


}

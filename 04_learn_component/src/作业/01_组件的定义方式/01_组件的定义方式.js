import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    this.state = {
      message: 'hello world',
    }
  }
  render() {
    return <div>{this.state.message}</div>
  }
}

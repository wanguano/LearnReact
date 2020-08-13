import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Child name="jean" age="18" height="1.88" />
      </div>
    )
  }
}

class Child extends Component {
  render() {
    const { name, age, height } = this.props
    return <div>{name + ' ' + age + ' ' + height}</div>
  }
}

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

function Child(props) {
  return <h2>{props.name + ' ' + props.age + ' ' + props.height}</h2>
}

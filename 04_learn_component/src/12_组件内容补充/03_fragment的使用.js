import React, { PureComponent, Fragment } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      friends: [
        { name: 'jean', age: 18 },
        { name: 'kobe', age: 20 },
        { name: 'kak', age: 28 },
      ],
    }
  }

  render() {
    return (
      <>
        <h2>当前计数: {this.state.counter}</h2>
        <button>+1</button>
        {this.state.friends.map(item => {
          return (
            <Fragment key={item.name}>
              <div>{item.name}</div>
              <div>{item.age}</div>
            </Fragment>
          )
        })}
      </>
    )
  }
}

import React, { PureComponent, Fragment } from 'react'

// fragment: 不希望渲染根标签时
export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      userInfo: ['jane', 'jean', 'why'],
    }
  }
  render() {
    const { userInfo } = this.state
    return (
      // 
      <>
        {userInfo.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </>
    )
  }
}

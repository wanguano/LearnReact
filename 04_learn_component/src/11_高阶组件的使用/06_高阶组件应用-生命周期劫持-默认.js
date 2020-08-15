import React, { PureComponent } from 'react'

class Home extends PureComponent {
  render() {
    return <div>Home</div>
  }

  UNSAFE_componentWillMount() {
    this.startTime = Date.now()
  }

  componentDidMount() {
    this.endTime = Date.now()
    const interval = this.endTime - this.startTime
    console.log(`Home组件渲染时间: ${interval}`)
  }
}

class About extends PureComponent {
  render() {
    return <div>About</div>
  }

  UNSAFE_componentWillMount() {
    this.startTime = Date.now()
  }

  componentDidMount() {
    this.endTime = Date.now()
    const interval = this.endTime - this.startTime
    console.log(`Home组件渲染时间: ${interval}`)
  }
}

// 获取组件的渲染时间
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    )
  }
}

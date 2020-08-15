import React, { PureComponent } from 'react'

// 生命周期劫持
function WithRenderTime(WrapperComponent) {
  return class extends PureComponent {
    render() {
      return (
        <div>
          <WrapperComponent />
        </div>
      )
    }

    UNSAFE_componentWillMount() {
      this.startTime = Date.now()
    }

    componentDidMount() {
      this.endTime = Date.now()
      const interval = this.endTime - this.startTime
      console.log(`${this.name}组件渲染时间: ${interval}`)
    }
  }
}

class Home extends PureComponent {
  render() {
    return <div>Home</div>
  }
}

class About extends PureComponent {
  render() {
    return <div>About</div>
  }
}

const TimeHome = WithRenderTime(Home)
const TimeAbout = WithRenderTime(About)

// 高阶组件生命周期应用场景: 将生命周期混入
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <TimeHome />
        <TimeAbout />
      </div>
    )
  }
}

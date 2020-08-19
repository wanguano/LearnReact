import React, { PureComponent } from 'react'

// 增强Props
// 每个组件都有 共同的props

// function withComponentProps(WrapperComponent) {
//   return props => {
//     return <WrapperComponent {...props} />
//   }
// }

class Home extends PureComponent {
  render() {
    return (
      <div>
        Home:
        {`用户名: ${this.props.name} 等级: ${this.props.level} 区域: ${this.props.region}`}
      </div>
    )
  }
}

class Profile extends PureComponent {
  render() {
    return (
      <div>
        Profile:
        {`用户名: ${this.props.name} 等级: ${this.props.level} 区域: ${this.props.region}`}
      </div>
    )
  }
}

// const Home = withComponentProps(Home)
// const Profile = withComponentProps(Profile)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home name="jane" level="18" />
        <Profile name="jane" level="18" />
      </div>
    )
  }
}

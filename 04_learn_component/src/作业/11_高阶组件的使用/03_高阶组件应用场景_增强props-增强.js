import React, { PureComponent, createContext } from 'react'

// 增强Props
// 每个组件都有 共同的props
// 都需要使用 context. 来进行共享
const UserInfo = createContext({
  name: 'default',
  age: '0',
  region: 'default',
})

function withComponentProps(WrapperComponent) {
  return props => {
    return (
      <UserInfo.Consumer>
        {value => <WrapperComponent {...props} {...value} />}
      </UserInfo.Consumer>
    )
  }
}

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

const HomeEnhance = withComponentProps(Home)
const ProfileEnhance = withComponentProps(Profile)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UserInfo.Provider value={{ region: '中国' }}>
          <HomeEnhance name="jane" level="18" />
          <ProfileEnhance name="jane" level="18" />
        </UserInfo.Provider>
      </div>
    )
  }
}

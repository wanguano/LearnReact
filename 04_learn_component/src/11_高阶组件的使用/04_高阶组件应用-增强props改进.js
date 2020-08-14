import React, { PureComponent, createContext } from 'react'

// 创建context
const UserContext = createContext({
  nickname: 'defaultName',
  level: -1,
  region: '中国',
})

// 定义一个高阶组件
function withUser(WrapperComponent) {
  return props => {
    return (
      <UserContext.Consumer>
        {user => {
          return <WrapperComponent {...props} {...user} />
        }}
      </UserContext.Consumer>
    )
  }
}

class Home extends PureComponent {
  render() {
    return (
      <h2>
        Home:{' '}
        {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}
      </h2>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <h2>
        About:{' '}
        {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}
      </h2>
    )
  }
}

class Detail extends PureComponent {
  render() {
    return (
      <h2>{`Detail: 昵称:${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}</h2>
    )
  }
}

const UserHome = withUser(Home)
const UserAbout = withUser(About)
const UserDetail = withUser(Detail)


export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContext.Provider
          value={{ nickname: 'jean', level: 99, region: '中国' }}
        >
          <UserHome />
          <UserAbout />
          <UserDetail />
        </UserContext.Provider>
      </div>
    )
  }
}

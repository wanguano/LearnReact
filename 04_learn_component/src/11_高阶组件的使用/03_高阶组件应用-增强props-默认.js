import React, { PureComponent, createContext } from 'react'

// 创建context
const UserContext = createContext({
  nickname: 'defaultName',
  level: -1,
  region: '中国',
})

class Home extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Consumer>
          {user => {
            return (
              <div>{`Home 用户名: ${user.name} 等级: ${user.level} 区域: ${user.region}`}</div>
            )
          }}
        </UserContext.Consumer>
      </div>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Consumer>
          {user => {
            return (
              <div>{`About 用户名: ${user.name} 等级: ${user.level} 区域: ${user.region}`}</div>
            )
          }}
        </UserContext.Consumer>
      </div>
    )
  }
}

// 高阶组件应用: 当多个组件都显示一个固定props时
export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContext.Provider
          value={{ nickname: 'jean', level: 99, region: '中国' }}
        >
          <Home name="jean" level="99" />
          <About name="kobe" level="18" />
        </UserContext.Provider>
      </div>
    )
  }
}

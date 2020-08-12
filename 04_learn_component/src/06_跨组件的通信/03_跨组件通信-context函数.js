import React, { Component } from 'react'
// 不通过props来一层层进行传递使用: context API
// 1.使用React.createContext创建需要共享数据的对象(需要跨组件间通信的数据)
const UserContext = React.createContext(
  { nickname: 'coderWhy', level: -1 } // 默认值
)

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nickname: 'kobe',
      level: 99,
    }
  }
  render() {
    return (
      <div>
        {/* 2.使用Context对象的返回的 Provider React 组件,传递 value */}
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
      </div>
    )
  }
}

function Profile(props) {
  return (
    <ul>
      <ProfileHeader />
      <li>设置1</li>
      <li>设置2</li>
      <li>设置3</li>
      <li>设置4</li>
    </ul>
  )
}

// 使用函数式组件消费UserContext.Provider组件提供的value,不需要Class.contextType
function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {value => {
        console.log(value)
        return (
          <div>
            <h2>用户昵称: {value.nickname}</h2>
            <h2>用户等级: {value.level}</h2>
          </div>
        )
      }}
    </UserContext.Consumer>
  )
}

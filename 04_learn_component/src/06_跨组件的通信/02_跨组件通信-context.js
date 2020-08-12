import React, { Component } from 'react'
// 不通过props来一层层进行传递使用: context API
// 1.使用React.createContext创建需要共享数据的对象(需要跨组件间通信的数据)
const userContext = React.createContext(
  { nickName: 'coderWhy', level: -1 } // 默认值
)

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nickName: 'kobe',
      level: 99,
    }
  }
  render() {
    return (
      <div>
        {/* 2.使用Context对象的返回的 Provider React 组件,传递 value */}
        <userContext.Provider value={this.state}>
          <Profile />
        </userContext.Provider>
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

class ProfileHeader extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.context)
    return (
      <div>
        {/* 使用组件Provider提供的value */}
        <h2>用户名:{this.context.nickName} </h2>
        <h3>等级: {this.context.level} </h3>
      </div>
    )
  }
}

// 3.Class.contextType来取出组件Provider提供的value
ProfileHeader.contextType = userContext

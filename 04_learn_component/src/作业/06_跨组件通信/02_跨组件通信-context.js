import React, { Component, createContext, Profiler } from 'react'
// 1.创建context对象
const UserContext = createContext({
  name: 'jack',
  age: 18,
  height: 1.58,
})

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = { name: 'jean', age: 18 }
  }
  render() {
    return (
      <div>
        {/* 使用context组件提供子组件消费 */}
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
      </div>
    )
  }
}

class Profile extends Component {
  render() {
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
        <h2>用户名:{this.context.name} </h2>
        <h3>等级: {this.context.age} </h3>
      </div>
    )
  }
}
// 3.从context.provider中取出value
ProfileHeader.contextType = UserContext

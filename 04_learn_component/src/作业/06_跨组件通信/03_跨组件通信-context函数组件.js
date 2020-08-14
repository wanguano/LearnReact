import React, { Component, createContext, Profiler } from 'react'
// 1.创建context对象
const UserContext = createContext({
  name: 'jack',
  age: 18,
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

function Profile(props) {
  return <ProfileHeader />
}

function ProfileHeader(props) {
  return (
    <div>
      <UserContext.Consumer>
        {value => {
          return <h2>{value.name + ' ' + value.age}</h2>
        }}
      </UserContext.Consumer>
    </div>
  )
}

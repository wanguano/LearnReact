import React, { PureComponent, StrictMode } from 'react'

class Profile extends PureComponent {
  constructor(props) {
    super(props)
    console.log('profile')
  }
  render() {
    return (
      <div>
        <span ref="profile">Profile</span>
      </div>
    )
  }

  // UNSAFE_componentWillMount() {
  //   console.log('Profile componentWillMount')
  // }
}

class Home extends PureComponent {
  constructor(props) {
    super(props)
    console.log('home')
  }
  render() {
    return (
      <div>
        <span ref="home"></span>
      </div>
    )
  }

  // UNSAFE_componentWillMount() {
  //   console.log('Home componentWillMount')
  // }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        {/* 严格检测,检测什么呢?
            1.过期的生命周期函数
            2.使用过时的ref API
            3.检查意外的副作用: 什么周期函数调用两次
        */}
        <StrictMode>
          <Home />
        </StrictMode>
        <Profile />
      </div>
    )
  }
}

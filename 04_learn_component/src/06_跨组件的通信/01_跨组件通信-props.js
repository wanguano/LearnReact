import React, { Component } from 'react'
// 1.跨组件通信 a -> b -> c 通过 props 传递
// 展开运算: 将prop解构,和JS的三点运算符不一样
// 你会发现: 祖先和子孙进行通信,通过props传递数据,一层一层传递非常麻烦
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
        {/* 展开运算: JSX将state所有属性和值通过数据进行传递 */}
        <Profile {...this.state} />
      </div>
    )
  }
}

function Profile(props) {
  return (
    <ul>
      <ProfileHeader {...props} />
      <li>设置1</li>
      <li>设置2</li>
      <li>设置3</li>
      <li>设置4</li>
    </ul>
  )
}

function ProfileHeader(props) {
  return (
    <div>
      <h2>用户名: {props.nickName}</h2>
      <h3>等级: {props.level}</h3>
    </div>
  )
}

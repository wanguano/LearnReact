import React, { PureComponent, createRef, forwardRef } from 'react'
// 高阶组件forwardRef,获取函数式组件DOM
const Profile = forwardRef(function Profile(props, ref) {
  return <h2 ref={ref}>Profile</h2>
})

class Home extends PureComponent {
  render() {
    return <div>Home</div>
  }
}

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.titleRef = createRef()
    this.homeRef = createRef()
    this.profileRef = createRef()
  }
  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>title</h2>
        <Home ref={this.homeRef} />
        <Profile ref={this.profileRef} />
        <button onClick={e => this.printRef()}>打印Ref</button>
      </div>
    )
  }

  // ref转发: 获取函数式组件中的DOM
  // 方式一: 传入ref属性 (错误)
  // 方式二: 使用高阶组件 forwardRef
  printRef() {
    console.log(this.titleRef.current)
    console.log(this.homeRef.current)
    console.log(this.profileRef.current)
  }
}

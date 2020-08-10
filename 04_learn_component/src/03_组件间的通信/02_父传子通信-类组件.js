import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="jean" age="18" height="1.88" />
        <ChildCpn name="kobe" age="30" height="1.98" />
      </div>
    )
  }
}

class ChildCpn extends Component {
  // 子组件接收父组件传递的数据,通过props接收父组件传递数据
  // 当然子组件可以在constructor中获取父组件传递的数据
  // 因为super会调用父类的构造函数,在父类中已经初始化props了
  // 调用了super此时的props已经在this当中了

  // 当子类只有props和调用super可以不写,因为子类默认就是这么操作的
  constructor(props) {
    super()
    // console.log(this.props)
  }

  render() {
    let { name, age, height } = this.props
    return <div>{name + ' ' + age + ' ' + height}</div>
  }
}

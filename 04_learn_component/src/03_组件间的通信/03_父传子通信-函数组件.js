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

// 函数组件接收props是从参数中获得
function ChildCpn(props) {
  return (
    <div>
      <h3>
        展示父组件传递的props:{' '}
        {props.name + ' ' + props.age + ' ' + props.height}
      </h3>
    </div>
  )
}

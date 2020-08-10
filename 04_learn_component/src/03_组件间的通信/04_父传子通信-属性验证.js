import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="jean" age={18} height={1.88} />
        <ChildCpn name="kobe" age={28} height={1.98} />
        <ChildCpn />
      </div>
    )
  }
}

function ChildCpn(props) {
  return (
    <div>
      <h3>
        展示父组件传递的props:
        {props.name + ' ' + props.age + ' ' + props.height}
      </h3>
    </div>
  )
}

// 使用prop-types来校验父组件传递的props类型是否符合预期
ChildCpn.propTypes = {
  // name属性是必传的
  name: propTypes.string.isRequired,
  age: propTypes.number,
  height: propTypes.number,
}

// 默认值,父组件没有传递props时的默认值
ChildCpn.defaultProps = {
  name: '吴亦凡',
  age: 21,
  height: 1.77,
}

// class ChildCpn2 extends Component {
//   // es中class fields写法
//   static propTypes = {}

//   static defaultProps = {}
// }

import React, { Component } from 'react'
// 1.导入prop-types来进行属性校验
import PropTypes from 'prop-types'

export default class App extends Component {
  render() {
    return (
      <div>
        <Child name="jean" age={18} height={1.88} />
        <Child />
      </div>
    )
  }
}

function Child(props) {
  return <h2>{props.name + ' ' + props.age + ' ' + props.height}</h2>
}

// 2.类型校验: 使用prop-types来校验父组件传递的props类型是否符合预期
Child.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  height: PropTypes.number,
}

// 3.默认值,父组件没有传递props时使用默认值
Child.defaultProps = {
  name: 'jack',
  age: 18,
  height: 1.98,
}

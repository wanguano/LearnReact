import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'

// portal: 希望渲染的组件独立于父组件,使用
class Modals extends PureComponent {
  render() {
    return createPortal(
      // 传递的子元素
      this.props.children,
      // 挂载到的位置
      document.getElementById('modals')
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Modals >
          Modals
        </Modals>
      </div>
    )
  }
}

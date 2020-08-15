import React, { PureComponent } from 'react'

import ReactDOM from 'react-dom'
class Modals extends PureComponent {
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      // 将渲染的内容,挂载到id为modals元素上
      document.getElementById('modals')
    )
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        Home
        <Modals>title</Modals>
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

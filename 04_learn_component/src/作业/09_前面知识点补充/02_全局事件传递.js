import React, { PureComponent } from 'react'
import { EventEmitter } from 'events'

// 1.创建全局事件总线
const eventBus = new EventEmitter()

class Home extends PureComponent {
  render() {
    return <div>Home组件</div>
  }

  // 监听全局事件总线
  componentDidMount() {
    eventBus.addListener('sayHello', this.handleSayHelloEmit)
  }

  // 卸载全局事件总线
  componentWillUnmount() {
    eventBus.removeListener('sayHello', this.handleSayHelloEmit)
  }

  handleSayHelloEmit(message, num) {
    console.log(message, num)
  }
}

// 点击按钮: 给profile发射事件,在profile中监听事件
// 使用: events库
class Profile extends PureComponent {
  render() {
    return (
      <div>
        Profile
        <button onClick={e => this.emitHomeEvent()}>emit home message</button>
      </div>
    )
  }

  // 2.发射事件
  emitHomeEvent() {
    eventBus.emit('sayHello', 'hello home', 123)
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    )
  }
}

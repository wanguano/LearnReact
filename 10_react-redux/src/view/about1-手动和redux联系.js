import store from '../store/store'
import React, { PureComponent } from 'react'
import { increment, addAction } from '../store/actionCreators'

// 问题: home和about组件重复的代码过多
// 待解决: 将重复的代码

export default class About extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: store.getState().counter,
    }
  }
  // 3.订阅state变化
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      // 通知setState
      this.setState({
        counter: store.getState().counter,
      })
    })
  }

  // 4.取消订阅
  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div>
        <h2>About</h2>
        <h3>当前计数:{this.state.counter}</h3>
        <button onClick={() => this.increment()}>+1</button>
        <button onClick={() => this.addNum(5)}>+5</button>
      </div>
    )
  }

  increment() {
    // 2.dispatch提交action
    store.dispatch(increment())
  }

  addNum(num) {
    store.dispatch(addAction(num))
  }
}

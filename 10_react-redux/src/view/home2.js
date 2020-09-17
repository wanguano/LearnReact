import React, { PureComponent } from 'react'
import store from '../store/store'
import { increment, addAction } from '../store/actionCreators'

export default class home extends PureComponent {
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
        <h2>Home Page</h2>
        <h3>当前计数: {this.state.counter}</h3>
        <button onClick={() => this.increment()}>+1</button>
        <button onClick={() => this.addNum(5)}>+5</button>
        <hr />
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

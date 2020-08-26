import React, { PureComponent } from 'react'
import store from '../store/store'
import { decrement, subAction } from '../store/actionCreators'

export default class About extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      counter: store.getState().counter,
    }
  }

  componentDidMount() {
    // 订阅state,当state发生更新,通知setState进行更新
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      })
    })
  }

  componentWillUnmount() {
    // 当组件销毁,卸载订阅
    this.unsubscribe()
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={() => this.decrement()}>-1</button>
        <button onClick={() => this.subNumber(5)}>-5</button>
      </div>
    )
  }

  decrement() {
    // 派发action
    store.dispatch(decrement())
  }

  subNumber(num) {
    store.dispatch(subAction(num))
  }
}

import React, { PureComponent } from 'react'
import store from '../store/store'
import { addAction, increment } from '../store/actionCreators'

export default class Home extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      counter: store.getState().counter,
    }
  }

  componentDidMount() {
    // 订阅state
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
        <h1>Home</h1>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={() => this.increment()}>+1</button>
        <button onClick={() => this.addNumber(5)}>+5</button>
        <hr />
      </div>
    )
  }
  increment() {
    // 派发action
    store.dispatch(increment())
  }

  addNumber(num) {
    store.dispatch(addAction(num))
  }
}

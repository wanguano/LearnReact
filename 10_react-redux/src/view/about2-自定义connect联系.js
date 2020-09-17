import store from '../store/store'
import React, { PureComponent } from 'react'
import { increment, addAction } from '../store/actionCreators'
import connect from '../utils/connect2'

// 问题: home和about组件重复的代码过多
class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About</h2>
        <h3>当前计数:{this.state.counter}</h3>
        <button onClick={() => this.props.increment()}>+1</button>
        <button onClick={(() => this.props, increment())}>+5</button>
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

// 解决使用redux多个组件重复的代码
// 由connect调用,传递state和dispatch
const mapStateToProps = state => ({
  counter: state.counter,
})
const mapDispatchToProps = dispatch => ({
  increment() {
    dispatch()
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(About)

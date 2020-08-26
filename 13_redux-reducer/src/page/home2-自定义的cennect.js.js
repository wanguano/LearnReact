import React, { PureComponent } from 'react'
import { addAction, increment } from '../store/actionCreators'
import { connect } from '../utils/connect'

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数: {this.props.counter}</h2>
        <button onClick={() => this.props.increment()}>+1</button>
        <button onClick={() => this.props.addNumber(5)}>+5</button>
        <hr />

      </div>
    )
  }
}

// 定义组件依赖的state和dispatch (函数本身返回一个对象)
const mapStateToProps = state => ({
  counter: state.counter,
})
// 定义组件依赖的dispatch
const mapDispatchToProps = dispatch => ({
  increment() {
    dispatch(increment())
  },
  addNumber(num) {
    dispatch(addAction(num))
  },
})
// 调用connect函数,传递需要依赖的state和dispatch
// 该函数返回一个"高阶组件",传递当前需要依赖redux的组件
// 作用: 传递的组件可以通过props来使用依赖redux的props和dispatch
export default connect(mapStateToProps, mapDispatchToProps)(Home)

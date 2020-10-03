import React from 'react'
// import { connect } from '../utils/connect'
import { decrement, subAction } from '../store/actionCreators'
import { connect } from 'react-redux'


function About(props) {
  // 当依赖的state发生改变组件会被重新渲染
  console.log('About 组件被重新渲染')
  return (
    <div>
      <h1>About</h1>
      <h2>当前计数: {props.counter}</h2>
      <button onClick={() => props.decrement()}>-1</button>
      <button onClick={() => props.subNumber(5)}>-5</button>
      <br />
      <br />
      {/* 获取redux中的状态进行展示 */}
      {props.banners.map((item, index) => {
        return <li key={item.acm}>{item.title}</li>
      })}
      <br />
      {props.recommends.map((item, index) => {
        return <li key={item.acm}>{item.title}</li>
      })}
    </div>
  )
}

// 2.定义需要依赖的state和dispatch (需要返回一个对象)
const mapStateToProps = state => {
  return {
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    decrement() {
      dispatch(decrement())
    },
    subNumber(num) {
      dispatch(subAction(num))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)

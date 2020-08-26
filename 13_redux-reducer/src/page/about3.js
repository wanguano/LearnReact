import React from 'react'
// import { connect } from '../utils/connect'
import { decrement, subAction } from '../store/count/actionCreators'
import { connect } from 'react-redux'

// 1.代码重构
//    将组件间重复的进行抽取,将动态变化的如state或dispatch由props进行传递

function About(props) {
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
    counter: state.counterInfo.counter,
    banners: state.homeInfo.banners,
    recommends: state.homeInfo.recommends,
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

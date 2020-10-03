import React from 'react'
// import { connect } from '../utils/connect'
import { decrement, subAction } from '../store/actionCreators'
import { shallowEqual, useSelector } from 'react-redux'


function About(props) {
  // 使用shallowEqual解决useSelector问题
  console.log('About 组件被重新渲染')
  const { banners, recommends } = useSelector(state => ({
    banners: state.banners,
    recommends: state.recommends
  }), shallowEqual)

  return (
    <div>
      <h1>About</h1>
      {/* <h2>当前计数: {counter}</h2> */}
      <h4>组件没有依赖count: 但还是被重新渲染了</h4>
      {/* <button onClick={() => props.decrement()}>-1</button>
      <button onClick={() => props.subNumber(5)}>-5</button> */}
      <br />
      <br />
      {/* 获取redux中的状态进行展示 */}
      {banners.map((item, index) => {
        return <li key={item.acm}>{item.title}</li>
      })}
      <br />
      {recommends.map((item, index) => {
        return <li key={item.acm}>{item.title}</li>
      })}
    </div>
  )
}


export default About

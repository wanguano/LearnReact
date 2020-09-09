import React, { useState, useReducer } from 'react'

import reducer from './reducer'

export default function Home() {
  // const [count, setCount] = useState(0)
  // useReducer使用:
  //  1.不与redux相关
  //  2.useReducer仅仅是useState的一种代替方案
  const [state, setState] = useReducer(reducer, { count: 0 })
  return (
    <div>
      <h2>当前计数: {state.count}</h2>
      <button onClick={e => setState({ type: 'increment' })}>+</button>
      <button onClick={e => setState({ type: 'decrement' })}>-</button>
    </div>
  )
}

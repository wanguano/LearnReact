import React, { useState } from 'react'

import reducer from './reducer'

export default function Home() {
  //   读源码 useState
  //    - useState为什么重新调用该函数, 内部的`state`却被保存了
  const [state, setState] = useState(reducer, { count: 0 })
  return (
    <div>
      <h2>当前计数: {state.count}</h2>
      <button onClick={e => setState({ type: 'increment' })}>+</button>
      <button onClick={e => setState({ type: 'decrement' })}>-</button>
    </div>
  )
}

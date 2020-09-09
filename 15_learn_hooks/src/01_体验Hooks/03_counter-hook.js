import React, { useState } from 'react'

export default function CounterHook() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h2>当前计数: {state}</h2>
      <button onClick={e => setState(counter + 1)}>+1</button>
      <button onClick={e => setState(counter - 1)}>-1</button>
    </div>
  )
}

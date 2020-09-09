import React, { useReducer } from 'react'
import reducer from './reducer'

export default function Profile() {
  const [state, setState] = useReducer(reducer, { count: 0 })
  return (
    <div>
      <h2>Profile: {state.count}</h2>
      <button onClick={e => setState({ type: 'increment' })}>+1</button>
      <button onClick={e => setState({ type: 'decrement' })}>-1</button>
    </div>
  )
}

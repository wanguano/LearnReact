import React, { useState } from 'react'

export default function MultiHookState() {
  const [counter, setCounter] = useState(0)
  const [age, setAge] = useState(18)
  const [friend, setFriend] = useState(['jane', 'kobe', 'luck'])
  return (
    <div>
      <h2>当前计数: {counter}</h2>
      <h2>当前年龄: {age}</h2>
      <h2>好友列表: </h2>
      <ul>
        {friend.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}

import React, { useState, useEffect } from 'react'

export default function HookCounterTitleChange() {
  const [counter, setCounter] = useState(0)
  // useEffect 函数
  // 什么时候执行: 在DOM被挂载之后会执行,在state被更新之后会进行回调
  useEffect(() => {
    document.title = counter
    console.log('useEffect被执行了')
  })
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
}

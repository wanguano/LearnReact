import React, { useState, useCallback } from 'react'

export default function CallBackHomeDemo() {
  const [count, setCount] = useState(0)

  const increment1 = () => {
    console.log('increment1被调用了')
    setCount(count + 1)
  }

  // 使用useCallback进行性能优化:
  // 在调用该函数时,只有在初始时创建该函数: 使用的state依然是最开始的,在之后调用调用render不不会重新定义该函数
  // 参数1: 函数
  // 参数2: 依赖state
  const increment2 = useCallback(() => {
    console.log('increment2被调用了')
    setCount(count + 1)
  }, [count])

  return (
    <div>
      <h2>CallBackHomeDemo: {count}</h2>
      <button onClick={increment1}>+</button>
      <button onClick={increment2}>+</button>
    </div>
  )
}

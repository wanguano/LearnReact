import React, { useEffect, useState } from 'react'

export default function MultiEffectHookDemo() {
  const [counter, setCounter] = useState(0)
  // 多个useEffect使用
  useEffect(() => {
    console.log('修改DOM')
    // 参数二: 数组中传递依赖state,只要依赖的state变化才会执行该回调
  }, [counter])

  useEffect(() => {
    console.log('订阅事件')
    // 当参数二: 只传递一个空数组
  }, [])

  useEffect(() => {
    console.log('网络请求')
  }, [])
  return (
    <div>
      <h2>MultiEffectHookDemo</h2>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  )
}

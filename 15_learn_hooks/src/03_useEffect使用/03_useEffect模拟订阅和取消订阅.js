import React, { useEffect, useState } from 'react'

export default function EffectHookCancelDemo() {
  // 在组件被挂载DOM时订阅一些事件\
  // 组件卸载(销毁时)取消订阅事件
  useEffect(() => {
    console.log('订阅一些事件')

    // 取消订阅
    return () => {
      console.log('取消订阅')
    }

  // 在更新state时,不执行Effect函数,参数二传递一个数组
  }, [])
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <h2>当前计数: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  )
}

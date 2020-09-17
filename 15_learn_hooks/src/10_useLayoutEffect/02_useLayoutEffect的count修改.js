import React, { useEffect, useLayoutEffect, useState } from 'react'

export default function LayoutEffectCountChange() {
  const [count, setCount] = useState(10)
  /* 
    主要作用: 执行某些操作之后再执行DOM渲染,会阻塞页面渲染
    如何解决: 在render渲染之前,进行判断 useLayoutEffect
  */
  useLayoutEffect(() => {
    if (count === 0) {
      setCount(Math.random())
    }
  }, [count])

  return (
    <div>
      <h2>数字: {count}</h2>
      {/* 修改count为0 */}
      <button onClick={e => setCount(0)}>change 0 state for count</button>
    </div>
  )
}

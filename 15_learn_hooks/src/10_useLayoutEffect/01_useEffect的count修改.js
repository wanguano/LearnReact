import React, { useEffect, useState } from 'react'

export default function EffectCountChange() {
  const [count, setCount] = useState(10)
  /* 当前页面显示count: 10
    两个执行流程: 
      (1)用于点按钮后调用setCount重新执行render后count为: 0
      (2)触发useEffect判断当前count是否为0,为0执行setCount重新render后count: 10 
      之后的流程再来一遍...
    注意点: 其实点击后count为0后才改变为其他值
    如何解决: 在render渲染之前,进行判断 useLayoutEffect
  */
  useEffect(() => {
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

  // useLayoutEffect
  // 使用场景: 在render渲染DOM之前直接一些操作
}

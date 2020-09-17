import React, { useEffect, useRef, useState } from 'react'

export default function RefHookDemo03() {
  // useRef保存上一次的值
  const [count, setCount] = useState(10)

  const numRef = useRef(10)

  // 当count发生改变的时候,将count进行保存
  useEffect(() => {
    numRef.current = count
  }, [count])

  // ES6 filed 写法,不存在this绑定问题
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h2>当前计数: {count}</h2>
      <h2>上次计数: {numRef.current}</h2>
      <button onClick={increment}>+1</button>
    </div>
  )
}

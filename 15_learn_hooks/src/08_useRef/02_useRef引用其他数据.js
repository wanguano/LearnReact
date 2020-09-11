import React, { useEffect, useRef, useState } from 'react'

export default function RefHookDemo02() {
  // 需求: 使用ref保存上一次的某一个值
  const [count, setCount] = useState(0)

  // 将上一次的count进行保存,在count发生改变时,重新保存count
  // 为什么: 在点击button时,增加count时,会调用useEffect函数,会重新将上一次的值进行保存(不太对)
  const numRef = useRef(count)
  useEffect(() => {
    numRef.current = count
  }, [count])

  return (
    <div>
      {/* <h3>numRef中的值: {numRef.current}</h3>
      <h3>count中的值: {count}</h3> */}
      <h3>count上一次的值: {numRef.current}</h3>
      <h3>count这一次的值 {count}</h3>
      <button onClick={e => setCount(count + 10)}>+10</button>
    </div>
  )
}

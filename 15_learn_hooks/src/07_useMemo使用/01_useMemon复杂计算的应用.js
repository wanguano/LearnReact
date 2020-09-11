import React, { useState, useMemo } from 'react'

const calcCount = count => {
  let total = 0
  for (let i = 1; i <= count; i++) {
    console.log('for...')
    total += i
  }
  return total
}

export default function MemoHookDemo1() {
  // 案例需求: 跟根据count计算出1-count的累加和
  const [count, setCount] = useState(10)
  // 问题: 在咱们更新show状态时,如果count没变,不希望count在进行复杂的计算
  const [show, setShow] = useState(true)
  // 如何解决: useMemo,只有在count改变时,calcCount函数才会执行
  console.log('MemoHookDemo1被渲染')
  let total = useMemo(() => {
    return calcCount(count)
  }, [count])

  return (
    <div>
      <h2>{total}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <button onClick={e => setShow(!show)}>切换</button>
    </div>
  )
}

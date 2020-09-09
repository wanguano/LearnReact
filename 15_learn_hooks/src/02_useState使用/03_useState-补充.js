import React, { useState } from 'react'

export default function CounterHook() {
  // useState补充:
  // useState函数是可以传递一个函数的(源码)
  const [counter, setCounter] = useState(() => 10)
  // setState也是可以传递一个函数的: 跟this.setState( (prevState) => { })
  // 作用: 跟this.setState一样可以进行累加操作
  return (
    <div>
      <h2>当前计数: {counter}</h2>
      <button onClick={e => setCounter(prevCounter => prevCounter + 1)}>+1</button>
      <button onClick={handleBtnClick}>+40</button>
      <button onClick={e => setCounter(prevCounter => prevCounter - 1)}>-1</button>
    </div>
  )

  function handleBtnClick() {
    // 只会生效最后一个setCounter
    // setCounter(counter + 10)
    // setCounter(counter + 10)
    // setCounter(counter + 10)
    // setCounter(counter + 10)
    // 都会生效
    setCounter(prevState => prevState + 10)
    setCounter(prevState => prevState + 10)
    setCounter(prevState => prevState + 10)
    setCounter(prevState => prevState + 10)
  }
}

import React, { useState, useCallback, memo, useMemo } from 'react'

const JMButton = memo(props => {
  console.log('HYButton重新渲染: ', props.title)
  return <button onClick={props.increment}>JMButton+1</button>
})

export default function CallBackHomeDemo2() {
  // useCallback: 希望更新父组件的state时,子组件不被render渲染
  // 1.使用memo包裹子组件进行性能优化,子组件没有依赖的props或state没有修改,不会进行render
  // 2.一个疑问: 为什么 btn1 还是被渲染了?
  //  解答: (1)因为子组件依赖的 increment1 函数,在父组件没有进行缓存(在函数重新render时,increment1被重新定义了)
  //      (2)而increment2函数在父组件中被缓存了,所以memo函数先进性浅层比较时依赖的increment2是一样的所以没有被重新render渲染
  // 3.useCallback在什么时候使用?
  //  场景: 在将一个组件中的函数, 传递给子元素进行回调使用时, 使用useCallback对函数进行处理.

  console.log('CallBackHomeDemo2重新渲染')
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)

  const increment1 = () => {
    console.log('increment1被调用了')
    setCount(count + 1)
  }

  const increment2 = useCallback(() => {
    console.log('increment2被调用了')
    setCount(count + 1)
  }, [count])

  const increment3 = useMemo(() => {
    // useMemo对return的箭头函数进行保存
    return () => {
      console.log('increment3被调用了')
      setCount(count + 1)
    }
  }, [count])

  return (
    <div>
      <h2>CallBackHomeDemo: {count}</h2>
      <JMButton increment={increment1} title="btn1" />
      <JMButton increment={increment2} title="btn2" />

      <button onClick={e => setShow(!show)}>show切换</button>
    </div>
  )
}

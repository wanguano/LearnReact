import React, { useState, memo, useMemo } from 'react'

const User = memo(props => {
  console.log('User被渲染了')
  return (
    <h3>
      姓名: {props.info.name} 年龄:{props.info.age}
    </h3>
  )
})

export default function MemoHookDemo2() {
  console.log('MemoHookDemo2被渲染了')
  // 需求: 在更新父组件的局部变量时,子组件依赖的props或state没有改变不希望被render渲染
  // 1.memo包裹子组件
  // 2.为什么子组件User还是被渲染了呢?
  //  因为: 在父组件重新渲染时,会吃会重新创建info对象,memo在对比时会发现两次创建的info对象不同,会重新render渲染
  // 解决: 使用useMemo
  // const info = { name: 'kobe', age: 18 }
  const info = useMemo(() => {
    return { name: 'kobe', age: 18 }
  }, [])
  const [show, setShow] = useState(true)
  return (
    <div>
      <User info={info} />
      <button onClick={e => setShow(!show)}>切换</button>
    </div>
  )
}

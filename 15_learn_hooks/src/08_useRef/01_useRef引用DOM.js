import React, { useRef } from 'react'

class ChildCpn extends React.Component {
  render() {
    return <div>ChildCpn</div>
  }
}

function TestFunc() {
  return <div>TestFunc</div>
}

export default function RefHookDemo01() {
  const titleRef = useRef()
  const focusRef = useRef()
  const cpnRef = useRef()
  const funcRef = useRef()

  function changeDOM() {
    titleRef.current.innerHTML = 'hello world'
    focusRef.current.focus()
    console.log(cpnRef.current)
    // 函数式组件获取DOM使用forwardRef()
    console.log(funcRef.current)
  }
  return (
    <div>
      {/* 1.修改DOM元素 */}
      <h2 ref={titleRef}>RefHookDemo01</h2>
      <input type="text" ref={focusRef} />
      {/* 2.获取class组件 ✔ */}
      <ChildCpn ref={cpnRef} />
      {/* 3.获取函数式组件 ❌ */}
      <TestFunc ref={funcRef} />
      <button onClick={changeDOM}>修改DOM</button>
    </div>
  )
}

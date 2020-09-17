import React, { useRef, forwardRef } from 'react'

// forwardRef 用于获取函数式组件DOM
const JMInput = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />
})

export default function ForwardDemo() {
  // useImperativeHandle 不是很好理解,一般结合forward来使用
  // forward用于获取函数式组件DOM元素
  const inputRef = useRef()
  const getFocus = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      <button onClick={getFocus}>聚焦</button>
      <JMInput ref={inputRef} />
    </div>
  )
}

import React, { useEffect } from 'react'

function Home() {
  useLifeFlow('Home')
  return <h2>Home</h2>
}

function Profile() {
  useLifeFlow('Profile')
  return <h2>Profile</h2>
}

export default function CustomLiftHookDemo() {
  // 自定义Hook: 可以将多个组件重复的逻辑抽取到可重用的函数中
  /**需求
   * 被创建:打印组件被创建了;
   * 件被销毁:打印组件被销毁了;
   */
  useLifeFlow('CustomLiftHookDemo')
  return (
    <div>
      <h2>CustomLiftHookDemo</h2>
      <Home />
      <Profile />
    </div>
  )
}

// 函数前面添加use 成为自定义函数
function useLifeFlow(name) {
  useEffect(() => {
    console.log(`${name}被创建`)

    return () => {
      console.log(`${name}被卸载`)
    }
  }, [])
}

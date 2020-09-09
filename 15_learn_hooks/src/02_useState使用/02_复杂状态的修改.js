import React, { useState } from 'react'

export default function ComplexHookState() {
  const [friends, setFriend] = useState(['jane', 'kobe', 'luck'])
  const [students, setStudents] = useState([
    { id: 110, name: 'why', age: 18 },
    { id: 111, name: 'kobe', age: 30 },
    { id: 112, name: 'luck', age: 25 },
  ])
  return (
    <div>
      <h2>好友列表</h2>
      <ul>
        {friends.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
      <button onClick={e => setFriend([...friends, 'tom'])}>添加朋友</button>
      {/* 错误的做法 */}
      <button onClick={addFriend}>添加朋友</button>
      <h2>学生列表</h2>
      <ul>
        {students.map((item, index) => {
          return (
            <li key={item.id}>
              <span>
                名字: {item.name} 年龄: {item.age}
              </span>
              <button onClick={() => incrementAgeWithIndex(index)}>
                age+1
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )

  function addFriend() {
    // 错误的做法
    // 直接在原数组进行添加的话,react内部在调用该函数时:
    // 在渲染时会比较新的state和旧的state是否相同,如果相同则不会进行render渲染
    friends.push('jean')
    setFriend(friends)
  }

  // 待做: age + 1
  // 获取index时,传递事件的函数是箭头函数

  function incrementAgeWithIndex(index) {
    const newStudent = [...students]
    newStudent[index].age += 1
    setStudents(newStudent)
  }
}

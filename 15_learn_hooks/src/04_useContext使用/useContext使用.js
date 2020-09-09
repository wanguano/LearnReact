import React, { useContext } from 'react'
// useContext使用
import { Theme, User } from '../App'
export default function UseContextDemo() {
  const user = useContext(User)
  const theme = useContext(Theme)
  console.log(user, theme)
  return (
    <div>
      <h3>UseContextDemo</h3>
    </div>
  )
}

import React, { useContext } from 'react'
import useUserContext from '../hook/userContext'

export default function CustomUserHook() {
  // 待改进: 共享多个context,将多个context进行封装
  // const user = useContext(UserContext)
  // const token = useContext(TokenContext)
  // console.log(user, token)

  // 利用自定义Hook
  const [user, token] = useUserContext()
  console.log(user, token)
  return (
    <div>
      <h3>CustomUserHook</h3>
    </div>
  )
}

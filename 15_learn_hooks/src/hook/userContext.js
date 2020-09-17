import React, { useContext } from 'react'
import { TokenContext, UserContext } from '../App'

// 自定义Hook 函数前添加 use
export default function useUserContext() {
  const user = useContext(UserContext)
  const token = useContext(TokenContext)

  return [user, token]
}

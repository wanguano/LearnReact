import React, { memo } from 'react'
import Link from 'next/link'
import { ProfileWrapper } from './style'

export default memo(function Layout(props) {
  return (
    <ProfileWrapper>
      <h2>Profile</h2>
      <Link href="/profile/info">
        <a>个人信息</a>
      </Link>
      <Link href="/profile/settings">
        <a>个人设置</a>
      </Link>
      {props.children}
    </ProfileWrapper>
  )
})

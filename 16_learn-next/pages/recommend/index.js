import React, { memo } from 'react'
import { useRouter } from 'next/router'

export default memo(function Recommend() {
  const router = useRouter()
  console.log(router)
  return (
    <div>
      <h2>Recommend ID: {router.query.id}</h2>
    </div>
  )
})

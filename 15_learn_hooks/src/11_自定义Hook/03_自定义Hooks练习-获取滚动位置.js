import React, { useEffect, useState } from 'react'
import useScrollPosition from '../hook/scroll-position-hook'

export default function CustomScrollPositionHook() {
  const scrollY = useScrollPosition()

  return (
    <div style={{ padding: '1000px 0' }}>
      <div style={{ position: 'fixed', top: 0, left: 0 }}>
        CustomScrollPositionHook: {scrollY}
      </div>
    </div>
  )
}

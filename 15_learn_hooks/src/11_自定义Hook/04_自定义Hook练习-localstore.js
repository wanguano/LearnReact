import React, { useEffect, useState } from 'react'
import useLocalStorage from '../hook/local-store-hook'

export default function CustomLocalStore() {
  // 本地存储: 当state发生变化后localStore也发生变化
  const [name, setName] = useLocalStorage('name')
  return (
    <div>
      <div>CustomLocalStore: {name}</div>
      <button onClick={e => setName('why')}>setName</button>
    </div>
  )
}

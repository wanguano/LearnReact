import { useState, useEffect } from 'react'

/**
 * 获取本地存储数据
 * @param {String} key
 */
function useLocalStorage(key) {
  const [data, setData] = useState(() => {
    // 获取本地存储 name
    const data = JSON.parse(window.localStorage.getItem(key))
    return data
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(data))
  }, [data])

  return [data, setData]
}
export default useLocalStorage

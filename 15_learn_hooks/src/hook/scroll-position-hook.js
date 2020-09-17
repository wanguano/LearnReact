const { useState, useEffect } = require('react')

export default function useScrollPosition() {
  // 获取滚动信息
  const [scrollY, setScrollY] = useState(0)
  // 挂载完DOM后,注册scroll事件
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    document.addEventListener('scroll', handleScroll)

    // 组件卸载后移除scroll事件
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollY
}

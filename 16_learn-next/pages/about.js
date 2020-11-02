import React, { memo } from 'react'
// import Head from 'next/head'

export default memo(function About() {
  return (
    <div>
      {/* 如何处理多个组件间的重复内容? 1.复制  2.Layout组件 */}
      {/* <Head>
        <title>网易云音乐</title>
      </Head> */}

      About 本公司长达100年拥有悠久的历史
      <p>该网站是一个音乐网站🎵</p>

      <style>{`
        p {
          color: #f879c6;
        }

      `}</style>
    </div>
  )
})

import React, { memo } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default memo(function Layout(props) {
  return (
    <div>
      <Head>
        <title>网易云音乐</title>
      </Head>

      <header>
        <Link href="/about">
          <a>关于</a>
        </Link>
        <hr />
      </header>

      {props.children}

      <footer>
        <hr />
        这是一个公共的底部
      </footer>
    </div>
  )
})

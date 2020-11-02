import '../styles/globals.css'
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>网易云音乐</title>
      </Head>

      <header>
        <Link href="/">
          <a>首页 </a>
        </Link>
        <Link href="/about">
          <a>关于</a>
        </Link>
        <Link href="/profile">
          <a>我的</a>
        </Link>
        <hr />
      </header>

      <Component {...pageProps} />

      <footer>
        <hr/>
        这是一个公共的底部,多个组件间的公共页面
      </footer>
    </>
  )
}

export default MyApp

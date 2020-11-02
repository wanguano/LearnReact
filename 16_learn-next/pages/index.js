// import Head from 'next/head'
// import Link from 'next/link'
import Link from 'next/link'
import Layout from '../components/app-layout'
import styles from '../styles/Home.module.css'
import Router from 'next/router'
import axios from 'axios'

const Home = function (props) {
  const { name, banners, recommends } = props
  const recommendItemClick = (item) => {
    Router.push({
      pathname: 'recommend',
      query: {
        id: item,
      },
    })
  }
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>网易云音乐</title>
      </Head> */}

      <h2 className={styles.title}>Home页面</h2>
      <h2>Banner</h2>
      <h3>推荐数据</h3>
      <ul>
        {/* {[1, 2, 3].map((item) => {
          return (
            // 路由传递参数: 1.query
            // <Link href={`/recommend?id=${item}`} key={item}>
            //   <a>推荐数据{item}</a>
            // </Link>
            <li key={item} onClick={() => recommendItemClick(item)}>推荐数据{item}</li>
          )
        })} */}

        {/* {props.titles.map((item) => {
          return <li key={item}>{item}</li>
        })} */}
      </ul>

      {/* 链接跳转 */}
      {/* <a href="/about">关于</a> */}
      {/* 路由跳转 */}
      {/* <Link href="/about">
        <button>关于</button>
      </Link> */}
      <h2>轮播图数据:</h2>
      <ul>
        {banners.map((item, index) => {
          return <li key={item.acm}>{item.title}</li>
        })}
      </ul>
    </div>
  )
}

// 返回一个promise对象或者返回对象
Home.getInitialProps = async (props) => {
  const res = await axios({ url: 'http://123.207.32.32:8000/home/multidata' })

  return {
    name: 'why',
    banners: res.data.data.banner.list,
    recommends: res.data.data.recommend.list,
  }
}

export default Home

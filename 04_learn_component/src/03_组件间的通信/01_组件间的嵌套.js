import React, { Component } from 'react'

// 1.认识组件间嵌套
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

function Header() {
  return <h2>我是Header组件</h2>
}

function Main() {
  return (
    <div>
      <Banner />
      <ProductList />
    </div>
  )
}

function Footer() {
  return <div>我是Footer组件</div>
}

function Banner() {
  return <div>我是Banner组件</div>
}

function ProductList() {
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
      <li>商品列表5</li>
    </ul>
  )
}

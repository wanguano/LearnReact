import React, { Component } from 'react'

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

class Header extends Component {
  render() {
    return <div>Header组件</div>
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <Banner />
        <ProductList />
      </div>
    )
  }
}

function Footer(props) {
  return <h2>Footer组件</h2>
}

function ProductList(props) {
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
    </ul>
  )
}

function Banner(props) {
  return <h2>Banner组件</h2>
}

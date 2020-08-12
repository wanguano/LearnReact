import React, { Component, PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
    }
  }

  render() {
    console.log('App render函数被调用')
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
  /* 
    一开始所有的render函数都会被调用,然后当我们只想改变App组件中的state时
    React会默认调用render函数,所有在App嵌套的组件中的render函数都会被调用
    但是这并不是我们希望的,我们只希望state发生改变,与其他组件没有半毛钱关系(不应该调用render)
  */
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
}

// Header
function Header() {
  console.log('Header被调用')
  return <h2>我是Header组件</h2>
}

// Main
class Main extends PureComponent {
  render() {
    console.log('Main render函数被调用')
    return (
      <div>
        <Banner />
        <ProductList />
      </div>
    )
  }
}

class Banner extends PureComponent {
  render() {
    console.log('Banner render函数被调用')
    return <h3>我是Banner组件</h3>
  }
}

function ProductList() {
  console.log('ProductList被调用')
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

// Footer
function Footer() {
  console.log('Footer被调用')
  return <h2>我是Footer组件</h2>
}

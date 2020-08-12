import React, { Component, PureComponent, memo } from 'react'

/* memo的使用
  前面讲到了如果子组件没有依赖props渲染的问题: 继承自PureComponent来解决
  但是函数式组件渲染render怎么办: 使用 memo 函数来解决渲染render问题
*/
export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = { counter: 0 }
  }

  render() {
    console.log('App render函数被调用')
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <MemoHeader />
        <Main />
        <MemoFooter />
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
}

// Header
const MemoHeader = memo(function Header() {
  console.log('Header被调用')
  return <h2>我是Header组件</h2>
})

// Footer
const MemoFooter = memo(function Footer() {
  console.log('Footer被调用')
  return <h2>我是Footer组件</h2>
})

// Main
// ProductList为什么没有被render?因为它的父组件都没进行render
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

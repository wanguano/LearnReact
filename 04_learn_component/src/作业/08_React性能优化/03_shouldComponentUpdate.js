import React, { Component } from 'react'

// Header
function Header() {
  console.log('Header被调用')
  return <h2>我是Header组件</h2>
}

// Main
class Banner extends Component {
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

class Main extends Component {
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

// Footer
function Footer() {
  console.log('Footer被调用')
  return <h2>我是Footer组件</h2>
}

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      message: 'coder why',
    }
  }

  render() {
    console.log('App render函数被调用')
    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.changeText()}>
          更改文本视图没有依赖message,不希望进行render
        </button>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }

  // 视图中没有依赖 message 希望更改 message 视图不仅进行 render
  increment() {
    this.setState({
      counter: this.state.counter + 1,
      message: 'jean',
    })
  }
  // 使用shouldComponentUpdate来控制
  shouldComponentUpdate(nextProps,nextState) {
    // 当message发生改变render不进行更新
    if (this.state.message !== nextState.message ) {
      return false
    }
  }

  changeText() {
    this.setState({
      message: 'jean',
    })
  }
}

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
    render渲染问题:
      当父组件的state更新后,父组件render正常
      但是子组件也跟着进行了render渲染
      当我们更新父组件中的状态时,如果子组件没有依赖自父组件的数据,不希望子组件进行render渲染
  */
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
}

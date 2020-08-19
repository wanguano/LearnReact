import React, { PureComponent, forwardRef, createRef } from 'react'
// ref的转发: 获取函数式组件的DOM元素

const Home = forwardRef(function (props, ref) {
  return <h2 ref={ref}>Home组件</h2>
})

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.titleRef = createRef()
  }
  render() {
    return (
      <div>
        <Home ref={this.titleRef} />
        <button onClick={() => this.getFunctionDOM()}>获取函数式组件DOM</button>
      </div>
    )
  }

  getFunctionDOM() {
    console.log(this.titleRef.current)
  }
}

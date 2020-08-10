import React, { Component } from 'react'
import NavBar from './NavBar'
import NavBar2 from './NavBar具名插槽'
import './style.css'
// React实现slot
// 子组件的内容取决于父组件
// 1.前面我们讲过:
// render函数中return的JSX代码最终会转换成React.createElement('tabName', 'config', children)
// 而第三个参数 children 就是: 咱们在元素中插入的子元素,在React源码中将ChildrenArr放到了props中的children中,所以说子组件可以通过props.children来接收到父组件插入的子元素

// 2.在插入插槽内容时,你会发现不能实现像Vue中的指定插槽插入内容(具名插槽)
// 在React中可以通过属性来指定你要插入的内容,然后在子组件中使用 props 取出指定的JSX元素插入到指定位置

// 总结: 当只有一个默认内容时,直接插入到子元素即可,当有多个插槽内容时,使用 props 形式传递
// 小技巧: eslint会检查你的超链接没有内容时,会抛出警告 使用: / eslint以为是个路径,不会抛出警告
export default class App extends Component {
  render() {
    return (
      <div>
        {/* 1.插入到子元素中 子组件通过: props.children 取出 */}
        <NavBar>
          <img src="https://s1.ax1x.com/2020/05/07/Ymn0sS.png" alt="" />
          <div>我是中心内容</div>
          <a href="/">右侧</a>
        </NavBar>

        {/* 2.通过指定props存放指定的内容 子组件通过: props 取出指定内容,插入即可 */}
        <NavBar2
          leftSlot={
            <img src="https://s1.ax1x.com/2020/05/07/Ymn0sS.png" alt="" />
          }
          centerSlot={<div>我是中心内容</div>}
          rightSlot={<a href="/">右侧</a>}
        />
      </div>
    )
  }
}

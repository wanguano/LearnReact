import React, { Component } from 'react'
import TabControl from './TabControl'
import './style.css'

// 1.父组件传递数组,子组件进行遍历
// 2.父组件展示当前高亮的标题

export default class App extends Component {
  constructor(props) {
    super(props)

    this.titles =  ['流行', '新歌', '精选']
    // 一般state中放的数据都是需要进行变化的(响应式的)
    this.state = {
      titleText: '流行'
    }
  }
  render() {
    const { titleText } = this.state
    return (
      <div>
        <TabControl
          titles={this.titles}
          itemClick={index => this.itemClick(index)}
        />
        <h2>{titleText}</h2>
      </div>
    )
  }

  // 父组件中定义函数,子组件来进行调用
  itemClick(index) {
    this.setState({
      titleText: this.titles[index]
    })
  }
}

import React, { Component } from 'react'

export default class TabControl extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0,
    }
  }
  render() {
    let { titles } = this.props
    let { currentIndex } = this.state
    return (
      <div className={'tab-control'}>
        {titles.map((item, index) => {
          return (
            <div
              key={index}
              className={'tab-item ' + (currentIndex === index ? 'active' : '')}
              onClick={e => this.itemClick(index)}
            >
              <span>{item}</span>
            </div>
          )
        })}
      </div>
    )
  }

  itemClick(index) {
    // 调用父组件传递的回调函数
    const {itemClick} = this.props
    this.setState({
      currentIndex: index,
    })
    // 传递当前的index
    itemClick(index)
  }
}

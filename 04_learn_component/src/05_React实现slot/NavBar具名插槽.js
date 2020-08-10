import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props
    return (
      <div className="nav-bar">
        {/* 插入的内容由父组件来决定 */}
        <div className="nav-left">{leftSlot}</div>
        <div className="nav-center">{centerSlot}</div>
        <div className="nav-right">{rightSlot}</div>
      </div>
    )
  }
}

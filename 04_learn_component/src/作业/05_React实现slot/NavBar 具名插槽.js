import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    const { left, right, center } = this.props
    return (
      <div className="nav-bar">
        <div className="nav-left">{left}</div>
        <div className="nav-center">{center}</div>
        <div className="nav-right">{right}</div>
      </div>
    )
  }
}

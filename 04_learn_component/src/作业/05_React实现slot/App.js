import React, { Component } from 'react'
import NavBar from './NavBar'
import NavBar2 from './NavBar 具名插槽'
import './style.css'
// React如何实现像Vue实现插槽: children
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <span>我是左边</span>
          <div>middle</div>
          <a href="/">百度一下</a>
        </NavBar>
        <NavBar2
          left={<span>我是左边</span>}
          center={<div>middle</div>}
          right={<a href="/">百度一下</a>}
        />
      </div>
    )
  }
}

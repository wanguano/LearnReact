import React, { PureComponent } from 'react'
import Home from '../home'
import Profile from '../profile'

import appStyle from './app.module.css'

export default class App extends PureComponent {
  render() {
    return (
      <div id="app">
        App
        <h2 className={appStyle.title}>我是App的title</h2>
        <Home />
        <Profile />
      </div>
    )
  }
}

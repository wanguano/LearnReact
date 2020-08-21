import React, { PureComponent } from 'react'

import Home from '../home/Home'
import Profile from '../profile/Profile'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    )
  }
}

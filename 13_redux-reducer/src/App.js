import React, { PureComponent } from 'react'
import Home from './page/home5-redux-saga使用'
import About from './page/about3'

// import Home from './view/home'
// import About from './view/about'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    )
  }
}

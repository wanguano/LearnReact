import React, { PureComponent } from 'react'
import Home from './page/home5-redux-saga使用'
import About from './page/about3'

// import Home from './view/home2'
// import About from './view/about2-自定义connect联系'

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

import React, { PureComponent } from 'react'

// import CSSTransitionDemo from './transition/CSSTransitionDemo'
// import './transition/CSSTransition.css'
// import SwitchTransition from './transition/SwitchTransitionDemo'
import TransitionGroupDemo from './transition/TransitionGroupDemo'
import 'antd/dist/antd.css'

export default class App extends PureComponent {
  render() {
    return (
      <div style={{ textAlign: 'center', padding: '30px' }}>
        {/* <CSSTransitionDemo /> */}
        {/* <SwitchTransition /> */}
        <TransitionGroupDemo />
      </div>
    )
  }
}

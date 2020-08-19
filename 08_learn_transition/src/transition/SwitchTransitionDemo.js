import React, { PureComponent } from 'react'

import './SwitchTransition.css'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

export default class SwitchTransitionDemo extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isOn: true,
    }
  }
  render() {
    const { isOn } = this.state
    return (
      <div>
        <SwitchTransition mode="out-in">
          {/* 不能用in,因为按钮是一直显示的 * */}
          <CSSTransition
            key={isOn ? 'on' : 'off'}
            classNames="btn"
            timeout={1000}
          >
            <button onClick={e => this.setState({ isOn: !isOn })}>
              {isOn ? 'on' : 'off'}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}

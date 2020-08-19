import React, { PureComponent } from 'react'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './TransitionGroupDemo.css'

export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      names: ['kobe', 'jane', 'jean'],
    }
  }
  render() {
    return (
      <div>
        <TransitionGroup>
          {this.state.names.map((item, index) => {
            return (
              <CSSTransition key={item} timeout={500} classNames="item">
                <div>
                  {item}
                  <button onClick={e => this.removeItem(index)}>
                    remove item
                  </button>
                </div>
              </CSSTransition>
            )
          })}
        </TransitionGroup>
        <button onClick={e => this.addName()}>+name</button>
      </div>
    )
  }

  addName() {
    this.setState({
      names: [...this.state.names, 'coder'],
    })
  }

  removeItem(indey) {
    this.setState({
      names: this.state.names.filter((item, index) => index !== indey),
    })
  }
}

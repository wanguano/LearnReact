import React, { Component } from 'react'

export default class TabControl extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0,
    }
  }
  render() {
    const { currentIndex } = this.state
    return (
      <div className="tab-control">
        {this.props.titles.map((item, index) => {
          return (
            <div
              key={item}
              className={'tab-item ' + (currentIndex === index ? 'active' : '')}
              onClick={e => this.itemClick(index)}
            >
              <span> {item}</span>
            </div>
          )
        })}
      </div>
    )
  }

  itemClick(index) {
    this.setState({
      currentIndex: index,
    })

    this.props.changeTitle(index)
  }
}

import React, { PureComponent } from 'react'

export default class Item extends PureComponent {
  render() {
    return (
      <div className="card">
        <a href="https://github.com/reactjs">
          <img
            alt="img not find"
            src="https://avatars.githubusercontent.com/u/6412038?v=3"
            style={{ width: '100px' }}
          />
        </a>
        <p className="card-text">react.js</p>
      </div>
    )
  }
}

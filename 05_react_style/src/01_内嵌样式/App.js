import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      color: 'orange',
      fontWeight: 'bold',
    }
  }
  render() {
    return (
      <div>
        {/* React官方推荐: 普通css + 内嵌样式 */}
        <h2 style={{ fontSize: '50px', color: 'red' }}>React css </h2>
        <p style={this.state}>内嵌样式</p>
      </div>
    )
  }
}

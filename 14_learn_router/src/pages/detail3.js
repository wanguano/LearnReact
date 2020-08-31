import React, { PureComponent } from 'react'

export default class Detail3 extends PureComponent {
  render() {
    console.log(this.props.location)
    return (
      <div>
        <h3>Detail3: {this.props.location.state.name}</h3>
      </div>
    )
  }
}

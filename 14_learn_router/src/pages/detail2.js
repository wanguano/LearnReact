import React, { PureComponent } from 'react'

export default class Detail2 extends PureComponent {
  render() {
    // search获取传递的query
    console.log(this.props.location)
    return (
      <div>

        {/* search获取传递的query */}
        <h2>Detail2: {this.props.location.search}</h2>

      </div>
    )
  }
}

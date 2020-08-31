import React, { PureComponent } from 'react'

export default class Detail extends PureComponent {
  render() {
    const match = this.props.match
    console.log(match)
    return (
      <div>
        {/* 动态路由获取参数 */}
        <h2>Detail: {match.params.id}</h2>

      </div>
    )
  }
}

import React, { PureComponent } from 'react'

import styled from 'styled-components'

/* 
  特点:
    1.props穿透
    2.attrs的使用
    3.传入state作为props属性
*/
const JMInput = styled.input.attrs({
  placeholder: 'jane',
  bColor: 'red',
})`
  background-color: purple;
  border-color: ${props => props.bColor};
  color: ${props => props.color};
  font-size: ${props => props.theme.fontSize};
`

export default class Profile extends PureComponent {
  constructor() {
    super()

    this.state = {
      color: 'lime',
    }
  }
  render() {
    return (
      <div className="profile">
        <JMInput type="password" color={this.state.color} />
        <h2>我是Profile的标题</h2>
        <ul className="settings">
          <li>设置列表1</li>
          <li>设置列表2</li>
          <li>设置列表3</li>
        </ul>
      </div>
    )
  }
}

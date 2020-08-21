import React, { PureComponent } from 'react'
import styled from 'styled-components'

const ProfileWrapper = styled.div.attrs({
  bColor: 'red', // 定义固定属性值
})`
  color: #ff77b8;
  ul {
    color: skyblue;
    font-size: 18px;

    li {
      text-decoration: underline;
      &:hover {
        background-color: ${props => props.bColor};
      }
      &::after {
        content: ' abc';
        color: ${props => props.color}
      }
    }
  }
`

export default class Profile extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {baseColor: 'purple'}
  }
  render() {
    return (
      <ProfileWrapper color={this.state.baseColor}>
        ProfileWrapper
        <ul>
          <li>style component</li>
          <li>css module</li>
          <li>base css</li>
        </ul>
      </ProfileWrapper>
    )
  }
}

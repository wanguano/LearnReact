import React, { PureComponent } from 'react'
// 1.styled-components
import {HomeWrapper, H2Wrapper} from './style'
export default class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <H2Wrapper>Home</H2Wrapper>
      </HomeWrapper>
    )
  }
}

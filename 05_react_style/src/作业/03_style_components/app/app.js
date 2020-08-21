import React, { PureComponent } from 'react'
import Home from '../home/Home'
import Profile from '../profile/Profile'
import styled, { ThemeProvider } from 'styled-components'

// 样式的继承:
const BaseButton = styled.button`
  margin: 10px;
  font-size: 25px;
  padding: 10px;
`
const EnhanceButton = styled(BaseButton)`
  color: ${props => props.theme.color};
`

// Theme的共享

export default class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={{ color: 'lime' }}>
        <EnhanceButton>APP</EnhanceButton>
        <Home />
        <Profile />
      </ThemeProvider>
    )
  }
}

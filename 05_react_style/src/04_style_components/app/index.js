import React, { PureComponent } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Home from '../home'
import Profile from '../profile'

// styled feature
// 1.继承
// 2.theme 共享主题
const JMButton = styled.button`
  font-size: 20px;
  padding: 10px 12px;
  margin: 10px;
`
// 继承自 JMButton 的默认样式
const JMButtonPrimary = styled(JMButton)`
  color: ${props => props.theme.color};
  background-color: pink;
`

export default class App extends PureComponent {
  render() {
    return (
      <ThemeProvider id="app" theme={{ color: 'red', fontSize: '12px' }}>
        App
        <h2>我是App的title</h2>
        <Home />
        <hr />
        <Profile />
        <hr />
        <JMButton>我是APP的按钮</JMButton>
        <JMButtonPrimary>Primary主要的按钮</JMButtonPrimary>
      </ThemeProvider>
    )
  }
}

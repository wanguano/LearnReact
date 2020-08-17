import React, { PureComponent } from 'react'


import { HomeWrapper, HomeH2 } from './style'

export default class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper className="home">
        <HomeH2>我是home的标题</HomeH2>
        <div className="banner">
          <span>banner1</span>
          <span className="active">banner2</span>
          <span>banner3</span>
          <span>banner4</span>
        </div>
        <div>
          <span>轮播图</span>
        </div>
      </HomeWrapper>
    )
  }
}

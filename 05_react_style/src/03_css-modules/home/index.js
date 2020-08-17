import React, { PureComponent } from 'react'

import HomeStyle from './style.module.css'

export default class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <h2 className={HomeStyle.title}>我是home的标题</h2>
        <div className={HomeStyle.banner}>
          <span>轮播图</span>
        </div>
      </div>
    )
  }
}

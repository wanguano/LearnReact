import React, { PureComponent } from 'react'

import ProfileStyle from './style.module.css'

export default class Profile extends PureComponent {
  render() {
    return (
      <div className="profile">
        <h2 className={ProfileStyle.title}>我是Profile的标题</h2>
        <ul className="settings">
          <li>设置列表1</li>
          <li>设置列表2</li>
          <li>设置列表3</li>
        </ul>
      </div>
    )
  }
}

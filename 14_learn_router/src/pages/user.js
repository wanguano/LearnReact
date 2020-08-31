import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'

export default class User extends PureComponent {
  constructor() {
    super()

    this.state = {
      isLogin: true,
    }
  }
  // 判断当前用户是否登录,登陆显示信息,没有登录重定向login页面
  render() {
    return this.state.isLogin ? (
      <div>
        <h3>User</h3>
        <h4>当前登录用户: 风不识途</h4>
      </div>
    ) : (
      <Redirect to="/login" />
    )
  }
}

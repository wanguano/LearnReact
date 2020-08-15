import React, { PureComponent } from 'react'

class LoginPage extends PureComponent {
  render() {
    return <h2>LoginPage</h2>
  }
}

function WithAuth(WrapperComponent) {
  return props => {
    const { isLogin } = props
    // 判断props传递isLogin是否登录
    if (isLogin) {
      return <WrapperComponent />
    } else {
      return <LoginPage />
    }
  }
}

function Cart(props) {
  return <h2>Cart page</h2>
}

const AuthCartPage = WithAuth(Cart)

// 登录鉴权: 当用户登录显示才显示 cart页面 ,没有登录跳转login页面
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthCartPage isLogin={false} />
      </div>
    )
  }
}

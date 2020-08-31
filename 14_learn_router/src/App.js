import React, { PureComponent } from 'react'
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  withRouter,
} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './router'
import './app.css'
// import Home from './pages/home'
// import About from './pages/about'
// import Profile from './pages/profile'
// import User from './pages/user'
// import NotMatch from './pages/notMatch'
// import Login from './pages/login'
// import Product from './pages/product'
// import Detail from './pages/detail'
// import Detail2 from './pages/detail2'
// import Detail3 from './pages/detail3'

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      routers: [
        { to: '/', title: '首页' },
        { to: '/about', title: '关于' },
        { to: '/profile', title: '我的' },
      ],
      currentIndex: 0,
    }
  }
  render() {
    const id = 'abc'
    const info = { name: 'foo', age: 18 }
    return (
      <div>
        {/* <Link to="/">主页</Link>
          <Link to="/about">关于</Link>
          <Link to="/profile">我的</Link> */}
        {/* 1.NavLink的使用,需求:路径选中时,对应的a元素变为红色 */}
        {/* <NavLink exact to="/" activeStyle={{color: "red", fontSize: "30px"}}>首页</NavLink>
          <NavLink to="/about" activeStyle={{color: "red", fontSize: "30px"}}>关于</NavLink>
          <NavLink to="/profile" activeStyle={{color: "red", fontSize: "30px"}}>我的</NavLink> */}
        <NavLink exact to="/" activeClassName="link-active">
          主页
        </NavLink>
        <NavLink to="/about" activeClassName="link-active">
          关于
        </NavLink>
        <NavLink to="/profile" activeClassName="link-active">
          我的
        </NavLink>
        <NavLink to="/user" activeClassName="link-active">
          用户
        </NavLink>
        <NavLink to={`/detail/${id}`} activeClassName="link-active">
          详情
        </NavLink>

        <NavLink to={`/detail2?name=tom&age=18`}>详情2(通过search传参)</NavLink>
        <NavLink
          to={{
            pathname: 'detail3',
            search: '?name=tom',
            state: info,
          }}
        >
          详情3(通过to属性传递对象)
        </NavLink>

        <button onClick={e => this.jumpToProduct()}>商品</button>

        {/* 添加exact属性: 精准匹配 | 匹配动态路由参数 */}
        {/* 使用react-router-config来集中式管理 */}
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/product" component={Product} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/detail2" component={Detail2} />
          <Route path="/detail3" component={Detail3} />
          <Route component={NotMatch} />
        </Switch> */}

        {renderRoutes(routes)}
      </div>
    )
  }

  jumpToProduct() {
    this.props.history.push('/product')
  }
}

/**
 * 导入了withRouter高阶组件后:
 * 1.为什么当前APP组件就可以使用history属性了
 *    分析:react-router-dom导入withRouter
 *    react-router-dom是没有withRouter组件的,
 *    是通过Object.definedProperty定义的withRouter属性,
 *    在获取withRouter属性时,返回的是来自react-router中定义的:reactRouter.withRouter
 * 2.为什么还需要使用BrowserRouter包裹APP组件
 */
export default withRouter(App)

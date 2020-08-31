import React, { PureComponent } from 'react'
import { NavLink, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '../router'
export function AboutHistory(props) {
  return <h2>企业历史创作与2020年,与腾讯、阿里合作多年</h2>
}

export function AboutCulture(props) {
  return <h2>企业文化</h2>
}

export function AboutConnect(props) {
  return <h2>联系电话: 020-4888726</h2>
}

export function AboutJoin(props) {
  return <h3>加盟条件: ...</h3>
}

export default class About extends PureComponent {
  render() {
    console.log(this.props.route)
    return (
      <div>
        {/* 演示路由的嵌套:  */}
        <NavLink exact to="/about" activeClassName="about-active">
          企业历史
        </NavLink>
        <NavLink to="/about/culture" activeClassName="about-active">
          企业文化
        </NavLink>
        <NavLink to="/about/connect" activeClassName="about-active">
          联系我们
        </NavLink>
        {/* 不使用Router来跳转路径 */}
        <button onClick={e => this.joinTo()}>加入我们</button>
        {/* <Route exact path="/about" component={AboutHistory} />
        <Route path="/about/culture" component={AboutCulture} />
        <Route path="/about/connect" component={AboutConnect} />
        <Route path="/about/join" component={AboutJoin} /> */}
        {/* 使用react-router-config 配置路由映射关系 */}
        {/* {renderRoutes(routes[1].route)} */}
        {/* 分析:renderRoutes函数的返回值以及为什么在嵌套路由中有传递route */}
        {renderRoutes(this.props.route.route)}
      </div>
    )
  }

  joinTo() {
    // 1.使用的history是通过Route组件传递的props
    // 2.通过Route传递的history对象来实现路径的跳转
    // console.log(this.props.history)
    // console.log(this.props.location)
    // console.log(this.props.match)
    this.props.history.push('/about/join')
  }
}

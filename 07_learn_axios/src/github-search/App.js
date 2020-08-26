import React, { PureComponent } from 'react'
import Search from './component/search/search'
import './index.css'
import List from './component/list/list'

export default class App extends PureComponent {
  render() {
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          {/* 搜索模块 */}
          <Search />
        </section>
        {/* list模块 */}
        <List />
      </div>
    )
  }
}

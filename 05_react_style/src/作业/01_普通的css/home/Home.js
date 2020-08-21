import React, { PureComponent } from 'react'
import './Home.css'
export default class Home extends PureComponent {
  render() {
    return (
      <div id="home">
        <h3>Home: 一般将来时</h3>
        <h4>一般将来时语法</h4>
        <ul>
          <li>1.何时使用? 预先计划和要打算的事</li>
          <li>2.固定结构: 主 + is \ am \ are \ going to</li>
          <li>
            3.注意事项:
            <div>主+ is \ am \aret going to +动词原型 </div>
            <div>主+ is \ am \ are + going to+地点名词</div>
          </li>
        </ul>
        <h4>练习:</h4>
        <ul>
          <li>我打算周末去游泳</li>
          <li>他打算买辆新的车</li>
          <li>我们打算去上海。</li>
          <li>我打算2点到那</li>
          <li>他打算成为一名医生。</li>
          <li>我打算下周开始忙起来</li>
          <li>他们打算以后在北京</li>
          <li>她打算周末去游泳吗?</li>
          <li>她不打算周末去游泳。?</li>
        </ul>
      </div>
    )
  }
}

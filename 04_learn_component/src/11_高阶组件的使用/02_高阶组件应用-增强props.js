import React, { PureComponent } from 'react'

// 定义高阶组件,对传递的组件进行其他操作
function enhanceRegionProps(WrapperComponent) {
  return props => <WrapperComponent {...props} />
}

class Home extends PureComponent {
  render() {
    return (
      <div>{`用户名: ${this.props.name} 等级: ${this.props.level} 区域: ${this.props.region}`}</div>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <div>{`用户名: ${this.props.name} 等级: ${this.props.level} 区域: ${this.props.region}`}</div>
    )
  }
}

const EnhanceHome = enhanceRegionProps(Home)
const EnhanceAbout = enhanceRegionProps(About)

// 高阶组件应用: 当多个组件都显示一个固定props时
export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <EnhanceHome name="jean" level="99" />
        <EnhanceAbout name="kobe" level="18" />
      </div>
    )
  }
}

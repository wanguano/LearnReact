import React, { PureComponent } from 'react'
// 高阶组件的定义方式: 是个函数,传递一个组件,返回一个组件
function enhanceComponent(WrapperComponent) {
  const newComponent = class extends PureComponent {
    render() {
      return (
        <div>
          <WrapperComponent {...this.props} />
        </div>
      )
    }
  }
  newComponent.displayName = 'jane'
  return newComponent
}

class Home extends PureComponent {
  render() {
    return <div>Home组件</div>
  }
}

const EnhanceHome = enhanceComponent(Home)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <EnhanceHome name="cpt" age="18" />
      </div>
    )
  }
}

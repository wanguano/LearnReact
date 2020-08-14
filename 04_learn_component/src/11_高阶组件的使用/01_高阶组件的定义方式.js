import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return <div>App:{this.props.name}</div>
  }
}

// 高阶组件的定义方式:
// 1.首先是一个函数,参数是一个组件
// 2.返回值是一个组件

function enhanceComponent(WrapperComponent) {
  class NewComponent extends PureComponent {
    render() {
      return (
        <div>
          <WrapperComponent {...this.props} />
        </div>
      )
    }
  }
  NewComponent.displayName = 'kobe'
  return NewComponent
}

function enhanceComponent2(WrapperComponent) {
  function NewComponent(props) {
    return <WrapperComponent {...props} />
  }
  NewComponent.displayName = 'Kobe'
  return NewComponent
}

const EnhanceComponent = enhanceComponent(App)

export default EnhanceComponent
// export default App

import React, { PureComponent } from 'react'
import { StoreContext } from './context'
/**
 * connect.js:
 * 1.调用该函数: 返回一个高阶组件
 *      传递需要依赖 state 和 dispatch 来使用state或通过dispatch来改变state
 *
 * 2.调用高阶组件:
 *      传递你需要依赖 store 的组件
 *
 * 3.主要作用:
 *      将重复的代码抽取到高阶组件中,并将该组件依赖的 state 和 dispatch
 *      通过调用mapStateToProps()或mapDispatchToProps()函数
 *      并将该组件依赖的state和dispatch供该组件使用,其他使用store的组件不必依赖store
 *
 * 4.connect.js: 优化依赖
 *      目的:假如你将这套代码发布,他还需要使用手动的导入: 自己的store?👆
 *      优化:将store依赖,让用户使用时自己选择,使用context传递该文件
 *          用户自己provide提供自己的store
 */
export function connect(mapStateToProps, mapDispatchToProps) {
  return function enhanceComponent(WrapperComponent) {
    class EnhanceComponent extends PureComponent {
      constructor(props, context) {
        super(props, context)

        // 组件依赖的state
        this.state = {
          storeState: mapStateToProps(context.getState()),
        }
      }

      // 订阅数据发生变化,调用setState重新render
      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({
            centerStore: mapStateToProps(this.context.getState()),
          })
        })
      }

      // 组件被卸载取消订阅
      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        // 下面的WrapperComponent相当于 about 组件(就是你传递的组件)
        // 你需要将该组件需要依赖的state和dispatch作为props进行传递
        return (
          <WrapperComponent
            {...this.props}
            {...mapStateToProps(this.context.getState())}
            {...mapDispatchToProps(this.context.dispatch)}
          />
        )
      }
    }
    // 取出Provider提供的value
    EnhanceComponent.contextType = StoreContext
    return EnhanceComponent
  }
}

// connect(你需依赖的state,你需依赖的dispatch)(需使用redux状态的组件)

// connect()

import React, { PureComponent } from 'react'
import store from '../store/store'

/**
 *
 * @param {function} mapStateToProps 组件需要依赖的state
 * @param {function} mapDispatchToProps 组件提交的dispatch
 */
export default function connect(mapStateToProps, mapDispatchToProps) {
  return function enhanceComponent(WrapperComponent) {
    class EnhanceComponent extends PureComponent {
      constructor() {
        super()
      }

      componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
          console.log('-------')
        })
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        return (
          <WrapperComponent
            {...mapStateToProps(store.getSate)}
            {...mapDispatchToProps(store.dispatch)}
          />
        )
      }
    }

    return EnhanceComponent
  }
}

// 解决使用redux多个组件重复的代码
// 由connect调用,传递state和dispatch
// const mapStateToProps = state => ({
//   counter: state.counter,
// })
// const mapDispatchToProps = dispatch => ({
//   increment() {
//     dispatch()
//   },
// })
// connect(mapStateToProps, mapDispatchToProps)(About)

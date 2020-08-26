import store from './store/store.js'
import { addAction, subAction } from './store/actionCreators.js'

// 需求:在dispatch提交action之前查看action,在提交action之后查看state
// 方式一
// console.log('dispatch前---dispatching action:', addAction(10))
// store.dispatch(addAction(15))
// console.log('dispatch后---dispatching state:', store.getState())

// 方式二:封装函数
// function dispatchAndLogging(action) {
//   console.log('dispatch前---dispatching action:', action)
//   store.dispatch(action)
//   console.log('dispatch后---dispatching state:', store.getState())
// }
// dispatchAndLogging(addAction(10))
// dispatchAndLogging(addAction(5))

// 方式三:在函数基础之上进行优化: 修改原有的dispatch
// hack技术: monkeyingPatch
// const next = store.dispatch
// function dispatchAndLogging(action) {
//   console.log('dispatch前---dispatching action:', action)
//   next(action)
//   console.log('dispatch后---dispatching state:', store.getState())
// }
// store.dispatch = dispatchAndLogging

// store.dispatch(addAction(10))
// store.dispatch(addAction(5))

// 4.将之前的操作进行封装
// 封装patchLogging的代码
function patchLogging(store) {
  // 将store.dispatch进行拷贝
  const next = store.dispatch

  // 用户调用store.dispatch实际上调用的是下面的函数
  function dispatchAndLogging(action) {
    console.log('dispatch前---dispatching action:', action)
    next(action)
    console.log('dispatch后---dispatching state:', store.getState())
  }

  // 将store.dispatch指向dispatchAndLogging该函数
  // store.dispatch = dispatchAndLogging

  return dispatchAndLogging
}

// 封装patchThunk的功能
function patchThunk(store) {

  const next = store.dispatch
  
  function dispatchAndThunk(action) {
    if (typeof action === 'function') {
      action(store.dispatch, store.getState)
    } else {
      // action是对象
      next(action)
    }
  }
  // store.dispatch = dispatchAndThunk

  return dispatchAndThunk
}

patchLogging(store)
patchThunk(store)
// store.dispatch(addAction(5))
// store.dispatch(addAction(10))

// function foo(dispatch, getState) {
//   dispatch(subAction(10))
// }
// store.dispatch(foo)

// 5.封装applyMiddleware
function applyMiddleware(...middleware) {
  // const newMiddleware = [...middleware]
  middleware.forEach(middleware => {
    store.dispatch = middleware(store)
  })
}

applyMiddleware(patchLogging, patchThunk)

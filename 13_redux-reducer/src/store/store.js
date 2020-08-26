import { createStore, applyMiddleware, compose } from 'redux'
import thankMiddleware from 'redux-thunk'
import createSageMiddleware from 'redux-saga'
import { reducer } from './reducer.js'
import saga from './saga'

// composeEnhancers函数
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose

// 应用一些中间件
// 1.应用thankMiddleware中间件
// 2.创建sageMiddleware中间件
const sagaMiddleware = createSageMiddleware()

const enhancer = applyMiddleware(thankMiddleware, sagaMiddleware)
const store = createStore(reducer, composeEnhancers(enhancer))

sagaMiddleware.run(saga)

export default store

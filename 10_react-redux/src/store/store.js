import { createStore, applyMiddleware } from 'redux'
import thankMiddleware from 'redux-thunk'
import { reducer } from './reducer.js'
// 1.创建store对象

const enhancer = applyMiddleware(thankMiddleware)
const store = createStore(reducer,enhancer)

export default store

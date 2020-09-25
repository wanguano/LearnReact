import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import cReducer from './reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// 创建store传递reducer和thunk中间件
const store = createStore(cReducer, composeEnhancers(applyMiddleware(thunk)))

export default store

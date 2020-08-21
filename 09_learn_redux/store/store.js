import redux from 'redux'
import { reducer } from './reducer.js'
// 1.创建store对象
const store = redux.createStore(reducer)

export default store

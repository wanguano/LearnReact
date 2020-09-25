// 多个reducer合并
import {combineReducers } from 'redux'
import { reducer as recommendReducer } from '../recommend/store/reducer'

const cReducer = combineReducers({
  recommend: recommendReducer
})

export default cReducer
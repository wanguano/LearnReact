// 派发actions,函数返回一个对象
import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
} from './constant.js'

export const addAction = num => ({ type: ADD_NUMBER, num })
export const subAction = num => ({ type: SUB_NUMBER, num })
export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })


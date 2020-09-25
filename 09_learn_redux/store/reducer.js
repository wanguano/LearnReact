// 纯函数
import { ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT } from './constant.js'
const defaultState = {
  counter: 0,
}


export function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num }
    case INCREMENT:
      return { ...state, counter: state.counter + 1 }
    case DECREMENT:
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}

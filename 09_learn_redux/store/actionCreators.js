// 派发actions
import { ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT } from './constant.js'

// export function addAction(num) {
//   return { type: 'ADD_NUMBER', num }
// }

// export const addAction = num => {
//   return {type: 'ADD_NUMBER', num}
// }

export const addAction = num => ({ type: ADD_NUMBER, num })
export const subAction = num => ({ type: SUB_NUMBER, num })
export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })

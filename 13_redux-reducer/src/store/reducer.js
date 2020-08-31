import { combineReducers } from 'redux'
import { reducer as counterReducer } from './count'
import { reducer as homeReducer } from './home'

//  function reducer(state = {}, action) {
//   return {
//     counterInfo: counterReducer(state.counterInfo, action),
//     homeInfo: homeReducer(state.homeInfo, action),
//   }
// }


//reducer应该是一个什么类型? function
export const reducer = combineReducers({
  counterInfo: counterReducer,
  homeInfo: homeReducer,
})

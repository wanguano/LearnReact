import { reducer as counterReducer } from './count'
import { reducer as homeReducer } from './home'

export function reducer(state = {}, action) {
  return {
    counterInfo: counterReducer(state.counterInfo, action),
    homeInfo: homeReducer(state.homeInfo, action),
  }
}

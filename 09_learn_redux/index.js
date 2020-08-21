import store from './store/store.js'
import {
  addAction,
  subAction,
  increment,
  decrement,
} from './store/actionCreators.js'

store.subscribe(() => {
  console.log('state发生了修改: ', store.getState())
})

// 1.派发action
store.dispatch(addAction(15)) // => {type: '', num: 15}
store.dispatch(subAction(12)) // => {type: '', num: 12}
store.dispatch(increment())
store.dispatch(decrement())

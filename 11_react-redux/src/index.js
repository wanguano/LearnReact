// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'
// import './function/06_对象的不可变性-immer'

import store from './store'
import { bugAdd, bugRemove } from './actionCreators'

// 订阅state
const unsubscribe = store.subscribe(() => {
  console.log('change state!', store.getState())
})

// 派发action
store.dispatch(bugAdd('bug1'))

// 取消订阅
unsubscribe()

// 派发action
store.dispatch(bugRemove())

console.log(store.getState())
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
